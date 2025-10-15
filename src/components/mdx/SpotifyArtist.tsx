type Props = { id: string; height?: number }

export default function SpotifyArtist({ id, height = 352 }: Props) {
  const src = `https://open.spotify.com/embed/artist/${id}`
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border" style={{ borderColor: 'var(--color-border)' }}>
      <iframe
        src={src}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: 12 }}
      />
    </div>
  )
}


