import { useState } from 'react'

const LEVEL = ['', 'pemula', 'dasar', 'nyaman', 'mahir', 'andalan']

// Data dipisah dari tampilan, jadi mengubah skill cukup di sini
const SKILLS = {
  Backend: [
    { name: 'Laravel', level: 5, note: 'Stack utamaku untuk backend dan API.' },
    { name: 'PHP', level: 4, note: 'Bahasa dasar di balik Laravel.' },
    { name: 'SQL', level: 4, note: 'Dipakai tiap hari saat jadi IT Web Support.' },
    { name: 'REST API', level: 3, note: 'Merancang endpoint yang rapi.' },
  ],
  Frontend: [
    { name: 'Tailwind', level: 4, note: 'Dipakai untuk portofolio ini.' },
    { name: 'JavaScript', level: 3, note: 'Untuk interaksi di browser.' },
    { name: 'React', level: 2, note: 'Sedang kupelajari lewat portofolio ini.' },
    { name: 'HTML/CSS', level: 4, note: 'Fondasi semua tampilan web.' },
  ],
  'Data & QA': [
    { name: 'ETL', level: 4, note: 'Memindahkan dan merapikan data.' },
    { name: 'DB Validation', level: 4, note: 'Memeriksa data tetap konsisten.' },
    { name: 'Testing', level: 4, note: 'Exploratory testing dan pelaporan bug.' },
  ],
  Tools: [
    { name: 'Figma', level: 3, note: 'Merancang tampilan sebelum dikoding.' },
    { name: 'Flutter', level: 2, note: 'Pernah mencoba untuk aplikasi mobile.' },
    { name: 'Vite', level: 3, note: 'Alat build untuk proyek React.' },
  ],
}

// Komponen kecil dengan props: menerima `level`
function Pips({ level }) {
  return (
    <div className="my-2 flex gap-1" role="img" aria-label={`Level ${level} dari 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 flex-1 rounded-full ${n <= level ? 'bg-primary' : 'bg-ink/10'}`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const tabs = Object.keys(SKILLS)
  const [tab, setTab] = useState(tabs[0])      // kategori yang dipilih
  const [index, setIndex] = useState(0)        // item yang dipilih

  const items = SKILLS[tab]
  const selected = items[index]

  function pickTab(t) {
    setTab(t)
    setIndex(0) // kembali ke item pertama saat ganti kategori
  }

  return (
    <section id="skill" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <h2 className="font-mono text-ink/60 text-sm">06 / skill</h2>

      <div className="mt-4 overflow-hidden rounded-2xl border-2 border-surface bg-surface/40">
        {/* Bar jendela */}
        <div className="flex items-center gap-2 border-b border-ink/10 bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/50" />
          <span className="ml-2 font-mono text-xs text-ink/60">
            ~/skills/{tab.toLowerCase().replaceAll(' & ', '-').replaceAll(' ', '-')}
          </span>
        </div>

        {/* Tab kategori */}
        <div className="flex flex-wrap gap-2 px-4 pt-4 sm:px-5">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => pickTab(t)}
              aria-pressed={t === tab}
              className={`rounded-lg border px-3 py-1 font-mono text-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                t === tab
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-ink/20 text-ink/70 hover:border-primary hover:text-primary'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-[1.3fr_1fr]">
          {/* Kotak item */}
          <div className="grid grid-cols-3 content-start gap-2 sm:grid-cols-4">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-xl border transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  i === index
                    ? 'border-primary bg-primary/10'
                    : 'border-ink/20 bg-canvas hover:border-primary/60'
                }`}
              >
                <span className={`font-mono text-base font-medium ${i === index ? 'text-primary' : 'text-accent'}`}>
                  {item.name.slice(0, 2)}
                </span>
                <span className="px-1 text-center text-[10px] leading-tight text-ink/60">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Panel inspector */}
          <div className="rounded-xl border border-dashed border-ink/25 p-4" aria-live="polite">
            <p className="font-mono text-[11px] text-accent">inspect --item</p>
            <p className="mt-1 text-lg font-semibold text-ink">{selected.name}</p>
            <Pips level={selected.level} />
            <p className="font-mono text-xs text-ink/60">level: {LEVEL[selected.level]}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{selected.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}