import { useState } from 'react'

const LEVEL = ['', 'Beginner', 'Basic', 'Comfortable', 'Advanced ', 'Expert']

const SKILLS = {
  Backend: [
 { 
  name: 'Laravel', 
  level: 5, 
  note: 'Stack utamaku untuk backend dan API.',
  icon: (
    <img 
      src="/img/skill/laravel-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
  )
},
    { 
      name: 'PHP', 
      level: 5, 
      note: 'Bahasa dasar di balik Laravel.',
      icon: (
        <img 
      src="/img/skill/php-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'SQL', 
      level: 5, 
      note: 'Dipakai tiap hari saat jadi IT Web Support.',
      icon: (
       <img 
      src="/img/skill/mysql-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
   
  ],
  Frontend: [
    { 
      name: 'Tailwind', 
      level: 5, 
      note: 'Dipakai untuk portofolio ini.',
      icon: (
      <img 
      src="/img/skill/tailwind-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'JavaScript', 
      level: 4, 
      note: 'Untuk interaksi di browser.',
      icon: (
       <img 
      src="/img/skill/js-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'React', 
      level: 4, 
      note: 'Sedang kupelajari lewat portofolio ini.',
      icon: (
       <img 
      src="/img/skill/react-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'HTML/CSS', 
      level: 5, 
      note: 'Fondasi semua tampilan web.',
      icon: (
        <img 
      src="/img/skill/htmlcss-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
  ],
  Tools: [
    { 
      name: 'Figma', 
      level: 5, 
      note: 'Merancang tampilan sebelum dikoding.',
      icon: (
             <img 
      src="/img/skill/figma-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'Git', 
      level: 5, 
      note: 'Pernah mencoba untuk aplikasi mobile.',
      icon: (
              <img 
      src="/img/skill/git-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
    { 
      name: 'Github', 
      level: 5, 
      note: 'Pernah mencoba untuk aplikasi mobile.',
      icon: (
              <img 
      src="/img/skill/github-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
      )
    },
     { 
      name: 'Postman', 
      level: 5, 
      note: 'Merancang endpoint yang rapi.',
      icon: (
        <img 
      src="/img/skill/postman-2d.png" 
      alt="Laravel Logo" 
      className="w-full h-full object-cover"
    />
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
               <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-lg">
                    {item.icon}
              </div>
                {/* <span className="px-1 text-center text-[11px] font-medium leading-tight text-ink/80 truncate w-full">
                  {item.name}
                </span> */}
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
            {/* <p className="mt-2 text-sm leading-relaxed text-ink/70">{selected.note}</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}