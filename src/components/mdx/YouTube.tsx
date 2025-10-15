type Props = { id: string; title?: string }

export default function YouTube({ id, title }: Props) {
  const src = `https://www.youtube.com/embed/${id}`
  return (
    <div className="not-prose my-6 aspect-video w-full overflow-hidden rounded-lg border border-neutral-200">
      <iframe
        className="h-full w-full"
        src={src}
        title={title ?? 'YouTube video player'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}


