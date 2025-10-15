type Props = {
  children: React.ReactNode
  type?: 'info' | 'warn' | 'success'
}

export default function Callout({ children, type = 'info' }: Props) {
  const base = 'rounded-md border p-4 text-sm'
  const styles: Record<string, string> = {
    info: 'border-blue-200 bg-blue-50',
    warn: 'border-amber-200 bg-amber-50',
    success: 'border-emerald-200 bg-emerald-50'
  }
  return <div className={`${base} ${styles[type]}`}>{children}</div>
}


