type Props = { id: string }

export default function SpotifyTrack({ id }: Props) {
  const src = `https://open.spotify.com/embed/track/${id}`
  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg border border-neutral-200">
      <iframe
        src={src}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}


