import { useState } from 'react'

const LEVEL = ['', 'pemula', 'dasar', 'nyaman', 'mahir', 'andalan']

// Data diperkaya dengan path SVG icon untuk masing-masing tech stack
const SKILLS = {
  Backend: [
    { 
      name: 'Laravel', 
      level: 5, 
      note: 'Stack utamaku untuk backend dan API.',
      // Logo SVG Laravel
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.66 7.37L12 3.51L5.34 7.37v7.26L12 18.49l6.66-3.86V7.37zM12 1.5l8.66 5v10l-8.66 5L3.34 16.5v-10L12 1.5z"/>
        </svg>
      )
    },
    { 
      name: 'PHP', 
      level: 4, 
      note: 'Bahasa dasar di balik Laravel.',
      icon: (
        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 13h-1.5v-2h1.5c1.1 0 2-.9 2-2s-.9-2-2-2h-3v6H8V9h5.5c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/>
        </svg>
      )
    },
    { 
      name: 'SQL', 
      level: 4, 
      note: 'Dipakai tiap hari saat jadi IT Web Support.',
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      )
    },
    { 
      name: 'REST API', 
      level: 3, 
      note: 'Merancang endpoint yang rapi.',
      icon: (
        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      )
    },
  ],
  Frontend: [
    { 
      name: 'Tailwind', 
      level: 4, 
      note: 'Dipakai untuk portofolio ini.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.7 0-4.5 1.35-5.4 4.05C7.95 8.7 9.45 8.1 11.25 8.1c2.25 0 3.825 1.125 4.95 3.375C17.7 8.25 15.3 6 12 6zm-5.4 6c-2.7 0-4.5 1.35-5.4 4.05C2.55 14.7 4.05 14.1 5.85 14.1c2.25 0 3.825 1.125 4.95 3.375C12.3 14.25 9.9 12 6.6 12z"/>
        </svg>
      )
    },
    { 
      name: 'JavaScript', 
      level: 3, 
      note: 'Untuk interaksi di browser.',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm15.45 13.5c-.32-.96-1.02-1.68-2.28-2.1l-.8-.28c-.5-.18-.84-.36-.84-.78 0-.36.32-.6.88-.6.54 0 .94.24 1.12.72l1.32-.78c-.36-.78-1.08-1.32-2.44-1.32-1.32 0-2.22.78-2.22 1.86 0 1.02.72 1.5 1.92 1.92l.78.3c.6.22.9.54.9.96 0 .42-.42.72-1.08.72-.78 0-1.32-.36-1.56-1.02l-1.38.78c.42 1.08 1.38 1.74 2.94 1.74 1.5 0 2.52-.78 2.52-1.92 0-.48-.18-.9-.6-1.26z"/>
        </svg>
      )
    },
    { 
      name: 'React', 
      level: 2, 
      note: 'Sedang kupelajari lewat portofolio ini.',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" fill="currentColor"></circle>
          <ellipse rx="10" ry="4.5" cx="12" cy="12"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"></ellipse>
          <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"></ellipse>
        </svg>
      )
    },
    { 
      name: 'HTML/CSS', 
      level: 4, 
      note: 'Fondasi semua tampilan web.',
      icon: (
        <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l2 16.5L12 21l7-2.5L21 2H3zm15 3.5l-.5 5.5L12 13l-5.5-2-.3-3.5h11.8z"/>
        </svg>
      )
    },
  ],
  'Data & QA': [
    { 
      name: 'ETL', 
      level: 4, 
      note: 'Memindahkan dan merapikan data.',
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 14h6v6H4zM14 4h6v6h-6zM4 4h6v6H4zM14 14h6v6h-6z"/>
        </svg>
      )
    },
    { 
      name: 'DB Validation', 
      level: 4, 
      note: 'Memeriksa data tetap konsisten.',
      icon: (
        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    { 
      name: 'Testing', 
      level: 4, 
      note: 'Exploratory testing dan pelaporan bug.',
      icon: (
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      )
    },
  ],
  Tools: [
    { 
      name: 'Figma', 
      level: 3, 
      note: 'Merancang tampilan sebelum dikoding.',
      icon: (
        <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0zM12 5H8.5a3.5 3.5 0 1 0 0 7H12V5zm3.5 7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm0-7a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 8.5A3.5 3.5 0 0 1 8.5 5H12v7H8.5A3.5 3.5 0 0 1 5 8.5z"/>
        </svg>
      )
    },
    { 
      name: 'Flutter', 
      level: 2, 
      note: 'Pernah mencoba untuk aplikasi mobile.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25 2L3 13.25 6.75 17 21.75 2zM6.75 7L14.25 14.5 10.5 18.25 3 10.75z"/>
        </svg>
      )
    },
    { 
      name: 'Vite', 
      level: 3, 
      note: 'Alat build untuk proyek React.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3l3 18 15-12L3 3zm12.5 8.5L8 15l2-6.5 5.5 3z"/>
        </svg>
      )
    },
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
          {/* Kotak item dengan Icon */}
          <div className="grid grid-cols-3 content-start gap-2 sm:grid-cols-4">
            {items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  i === index
                    ? 'border-primary bg-primary/10 shadow-sm'
                    : 'border-ink/20 bg-canvas hover:border-primary/60'
                }`}
              >
                {/* Menampilkan SVG Logo Tech */}
                <div className="flex h-7 w-7 items-center justify-center">
                  {item.icon}
                </div>
                <span className="px-1 text-center text-[11px] font-medium leading-tight text-ink/80 truncate w-full">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Panel inspector */}
          <div className="rounded-xl border border-dashed border-ink/25 p-4 flex flex-col justify-center" aria-live="polite">
            <p className="font-mono text-[11px] text-accent">inspect --item</p>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex h-8 w-8 items-center justify-center">
                {selected.icon}
              </div>
              <p className="text-lg font-semibold text-ink">{selected.name}</p>
            </div>
            <Pips level={selected.level} />
            <p className="font-mono text-xs text-ink/60">level: {LEVEL[selected.level]}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{selected.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}