import { useState } from 'react'

const EMAIL = 'ramdonakamaliah@gmail.com' 

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/USERNAME' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/USERNAME' },
  { label: 'Instagram', href: 'https://www.instagram.com/USERNAME' },
]

const inputClass =
  'w-full bg-transparent py-1.5 font-mono text-sm text-ink outline-none placeholder:text-ink/40'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // kalau clipboard diblokir, pengunjung masih bisa menyalin manual
    }
  }

  // satu fungsi untuk semua input, dibedakan lewat atribut `name`
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault() // cegah halaman refresh
    const subject = encodeURIComponent(`Halo Donna, ini ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-mono text-ink/60 text-sm">07 / contact</h2>

      <div className="mt-4 grid items-start gap-8 md:grid-cols-2">
        {/* Kiri: ajakan */}
        <div>
          <p className="font-mono text-sm text-accent">$ ping donna</p>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Let's Work <span className="text-primary">Together</span>
          </h3>

          <p className="mt-4 flex items-center gap-2 text-sm text-ink/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open for Collaboration
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-ink/20 px-4 py-2.5">
            <span className="truncate font-mono text-sm text-ink">{EMAIL}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="shrink-0 font-mono text-xs text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {copied ? 'copied!' : 'copy'}
            </button>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/60 transition hover:text-primary"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan: form terminal */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border-2 border-surface bg-surface/40"
        >
          <div className="flex items-center gap-2 border-b border-ink/10 bg-surface px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/50" />
            <span className="ml-2 font-mono text-xs text-ink/60">send-message.sh</span>
          </div>

          <div className="space-y-1 p-4 sm:p-5">
            <div className="flex items-baseline gap-3 border-b border-ink/15">
              <label htmlFor="c-name" className="w-20 shrink-0 font-mono text-xs text-accent">name:</label>
              <input id="c-name" name="name" required value={form.name} onChange={handleChange}
                     autoComplete="name" placeholder="your name" className={inputClass} />
            </div>

            <div className="flex items-baseline gap-3 border-b border-ink/15">
              <label htmlFor="c-email" className="w-20 shrink-0 font-mono text-xs text-accent">email:</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange}
                     autoComplete="email" placeholder="your email" className={inputClass} />
            </div>

            <div className="flex items-start gap-3 border-b border-ink/15">
              <label htmlFor="c-message" className="mt-2 w-20 shrink-0 font-mono text-xs text-accent">message:</label>
              <textarea id="c-message" name="message" required rows={4} value={form.message} onChange={handleChange}
                        placeholder="write your message" className={`${inputClass} resize-none`} />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="rounded-xl bg-primary px-5 py-2 text-sm font-medium text-on-primary transition hover:shadow-glow hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                send ↵
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}