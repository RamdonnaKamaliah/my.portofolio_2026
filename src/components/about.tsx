import { useState } from "react";

interface FunFact {
  id: number;
  category: string;
  fact: string;
}

const FUN_FACTS: FunFact[] = [
  {
    id: 1,
    category: "Floristry",
    fact: "When I'm not busy writing lines of code, you can find me arranging fresh blooms as a florist!",
  },
  {
    id: 2,
    category: "Creative",
    fact: "I love getting hands-on with DIY projects, turning simple everyday materials into something unique and aesthetic.",
  },
  {
    id: 3,
    category: "Social & Active",
    fact: "I thrive on positive energy and genuinely enjoy participating in social events, volunteering, and community gatherings.",
  },
  {
    id: 4,
    category: "Bookworm",
    fact: "I'm an avid reader who loves getting lost in imaginative fiction worlds just as much as diving into self-improvement books.",
  },
  {
    id: 5,
    category: "Organized",
    fact: "Keeping a daily diary is my favorite ritual—it helps me stay organized, reflect on my day, and capture little memories.",
  },
];


function About() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const acakFakta = () => {
    if (FUN_FACTS.length === 0) return;

    if (FUN_FACTS.length === 1) {
      setCurrentIndex(0);
      return;
    }

    let nextIndex = Math.floor(Math.random() * FUN_FACTS.length);
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * FUN_FACTS.length);
    }

    setCurrentIndex(nextIndex);
  };

  const activeFact = currentIndex !== null ? FUN_FACTS[currentIndex] : null;

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <div>
        <h2 className="font-mono text-ink/60 text-sm">02 / About</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-4">
        {/* Kolom Kiri: Foto / Card */}
        <div className="relative max-w-md mx-auto md:mx-0 w-full aspect-square">
          <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 z-0"></div>

          <div className="relative z-10 bg-white rounded-2xl border-2 border-surface overflow-hidden h-full w-full shadow-lg">
            <img
              src="/img/my_foto.jpeg"
              alt="foto-dona"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute z-20 bg-surface rounded-t-2xl overflow-hidden h-12 w-full px-4 py-3 top-0 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-code-text inline-block"></span>
            </div>
            <p className="font-mono text-sm text-ink">donna.jpg</p>
          </div>
        </div>

        {/* Kolom Kanan: Teks & Informasi */}
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-sm text-accent">$ about.md</h2>

          <h1 className="font-semibold text-xl text-ink">
            Developer | IT Support
          </h1>

          <p className="text-md text-ink">
            Hi there! I’m a passionate coder girl who believes in the beauty of
            clean code and seamless user experiences. I love building fast, neat,
            and intuitive web applications. While I appreciate good design, my
            true strength lies in backend development and database management
            honed during my previous role as an IT Web Support where I
            extensively worked with SQL.
          </p>

          <div className="w-full px-6 py-6 border-l-4 border-primary bg-surface/50 shadow-sm rounded-r-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-primary">&gt; fun_fact__</p>
              {activeFact && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-surface text-primary border border-primary/20">
                  {activeFact.category}
                </span>
              )}
            </div>

            <p className="text-xs text-ink/70">
              Find out interesting facts about me
            </p>

            <div
              id="fact-box"
              className="bg-canvas/90 border border-primary/20 p-4 rounded-xl min-h-[84px] flex items-center justify-center text-center text-sm text-ink leading-relaxed"
            >
              {activeFact ? (
                <span>&ldquo;{activeFact.fact}&rdquo;</span>
              ) : (
                <span className="text-ink/50">Click the button below</span>
              )}
            </div>

            <button
              type="button"
              onClick={acakFakta}
              className="self-start bg-primary hover:opacity-90 text-on-primary px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm cursor-pointer"
            >
              random facts 🐾
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;