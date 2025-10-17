"use client"
import { useEffect, useRef } from 'react'

export default function AmbientRays() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const state = { w: 0, h: 0, t: 0 }

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      state.w = window.innerWidth
      state.h = window.innerHeight
      canvas.width = Math.floor(state.w * dpr)
      canvas.height = Math.floor(state.h * dpr)
      canvas.style.width = state.w + 'px'
      canvas.style.height = state.h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()

    const draw = () => {
      state.t += 0.005
      ctx.clearRect(0, 0, state.w, state.h)

      // Colors from CSS variables
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#1d87f2'
      const accent2 = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-2').trim() || '#6e34f7'

      // Ambient Rays SETTINGS per burst (right + left)
      // x,y: position as fraction of viewport size
      // rays: total rays in burst
      // baseFactor: inner radius  (fraction of min(width,height))
      // maxFactor: max extension  (fraction of min(width,height))
      // minPulse: minimum animated factor 0..1 so rays never collapse
      // lineWidth, shadowBlur: visual thickness / glow
      // Dual-frequency animation controls:
      //   speedA/speedB: animation speeds
      //   phaseA/phaseB: per-ray phase spacing (multipled by ray index)
      //   mix: 0..1 mix between A and B (1 = all A)
      //   jitterPhase: small random phase jitter per ray (radians)
      const bursts = [
        { x: state.w * 0.77, y: state.h * 0.062, rays: 20, baseFactor: 0.07,  maxFactor: 0.22, minPulse: 0.35, lineWidth: 3, shadowBlur: 10, glowAlpha: '0e',
          speedA: 2.6, speedB: 1.4, phaseA: 0.55, phaseB: 0.18, mix: 0.3, jitterPhase: 1.35 },
        { x: state.w * 0.23, y: state.h * 1.05, rays: 20, baseFactor: 0.065, maxFactor: 0.29, minPulse: 0.35, lineWidth: 3, shadowBlur: 10, glowAlpha: '0e',
          speedA:2.8, speedB: 1.4, phaseA: 0.6,  phaseB: 0.22, mix: 0.3, jitterPhase: 1.4 }
      ] as const

      // Subtle glow circle
      const minSide = Math.min(state.w, state.h)
      bursts.forEach((b) => {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, minSide * 0.5)
        grad.addColorStop(0, `${accent}${b.glowAlpha}`)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        //ctx.arc(b.x, b.y, minSide * 0.45, 0, Math.PI * 2)
        ctx.fill()
      })

      // Rays
      // Small deterministic hash for per-ray jitter (no deps)
      const hash = (x: number) => {
        const s = Math.sin(x * 127.1) * 43758.5453
        return s - Math.floor(s)
      }

      const drawBurst = (
        centerX: number,
        centerY: number,
        rays: number,
        baseRadius: number,
        maxRay: number,
        minPulse: number,
        lineWidth: number,
        shadowBlur: number,
        speedA: number,
        speedB: number,
        phaseA: number,
        phaseB: number,
        mix: number,
        jitterPhase: number
      ) => {
        for (let i = 0; i < rays; i++) {
        const a = (i / rays) * Math.PI * 2
          // Dual-frequency sum with small per-ray jitter for an organic feel
          const jitter = (hash(i + centerX * 0.01) - 0.5) * jitterPhase
          const nA = Math.sin(state.t * speedA + i * phaseA + jitter) * 0.5 + 0.5
          const nB = Math.sin(state.t * speedB + i * phaseB + jitter + 1.3) * 0.5 + 0.5
          const n = mix * nA + (1 - mix) * nB // 0..1
        // Enforce a minimum ray factor so rays never get too short.
        // Increase minPulse (0..1) to raise the minimum length.
          const pulse = minPulse + (1 - minPulse) * n
        const len = baseRadius + pulse * maxRay
        const x1 = centerX + Math.cos(a) * (baseRadius * 0.8)
        const y1 = centerY + Math.sin(a) * (baseRadius * 0.8)
        const x2 = centerX + Math.cos(a) * len
        const y2 = centerY + Math.sin(a) * len

        const g = ctx.createLinearGradient(x1, y1, x2, y2)
        g.addColorStop(0, `${accent2}00`)
        // 20% lower opacity than before (0x66 -> ~0x52)
        g.addColorStop(0.25, `${accent2}52`)
        // 20% lower opacity than before (0xaa -> ~0x88)
        g.addColorStop(0.7, `${accent}88`)
        g.addColorStop(1, `${accent}00`)
        ctx.strokeStyle = g
        // Slightly thicker rays for presence
          ctx.lineWidth = lineWidth
        // Soft bleed
        ctx.shadowColor = `${accent}22`
          ctx.shadowBlur = shadowBlur
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
        // reset shadow to avoid compounding
        ctx.shadowBlur = 0
        }
      }
      // draw bursts with individual settings
      bursts.forEach((b) => {
        const baseR = minSide * b.baseFactor
        const maxR = minSide * b.maxFactor
        drawBurst(b.x, b.y, b.rays, baseR, maxR, b.minPulse, b.lineWidth, b.shadowBlur,
          b.speedA, b.speedB, b.phaseA, b.phaseB, b.mix, b.jitterPhase)
      })
    }

    let last = 0
    const loop = (now: number) => {
      if (!prefersReduced) {
        // Aim ~60fps; throttle if tab is busy
        if (now - last > 16) {
          draw()
          last = now
        }
        rafRef.current = requestAnimationFrame(loop)
      } else {
        draw()
      }
    }

    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('resize', setSize)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}


