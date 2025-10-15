export default function ContactPage() {
  return (
    <section className="section">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-neutral-700">Want to work together or say hi?</p>
      <p className="mt-6 text-lg">
        <a className="text-accent hover:underline" href="mailto:hello@rhettrelleke.com">hello@rhettrelleke.com</a>
      </p>
      <div className="mt-8 flex gap-4 text-sm">
        <a className="hover:text-accent" href="https://github.com" target="_blank">GitHub</a>
        <a className="hover:text-accent" href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a className="hover:text-accent" href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </section>
  )
}


