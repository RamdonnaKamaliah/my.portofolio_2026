
function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Kiri: Teks & Keterangan */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-accent mb-3">
            &gt; hello, world<span className="animate-blink">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Hai, I <span className="text-primary">Donna</span>
          </h1>

          <p className="font-mono text-sm text-ink/60 mt-2">
            Web Developer | IT Support
          </p>

          <p className="max-w-md text-ink/70 leading-relaxed mt-4">
            I enjoy solving problems through clean and efficient code
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-ink/15 text-ink/80">
              Laravel
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-ink/15 text-ink/80">
              PHP
            </span>
            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface border border-ink/15 text-ink/80">
              React
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-sm font-medium transition hover:shadow-glow hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-accent text-accent px-5 py-2.5 rounded-xl text-sm font-medium transition hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Terminal Box */}
        <div
          id="terminal"
          className="bg-code-bg text-code-text font-mono text-xs sm:text-sm rounded-xl border border-ink/15 px-5 py-4 h-64 flex flex-col"
        >
          <div className="flex gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-code-text inline-block"></span>
          </div>

          <div
            id="output"
            className="flex-1 overflow-y-auto space-y-1"
            aria-live="polite"
          ></div>

          <form id="term-form" className="flex gap-2 pt-2">
            <label htmlFor="term-input" className="text-code-str">
              $
            </label>
            <input
              id="term-input"
              type="text"
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal"
              className="flex-1 bg-transparent outline-none text-code-text"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;