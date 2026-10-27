function Media(){
    return(
      <section id="media" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div>
            <h2 className="font-mono text-ink/60 text-sm">03 / medsos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-surface py-4 px-4 rounded-2xl mt-4">
                <h3 className="font-mono text-sm text-ink mb-3">Github Activity</h3>
                <div id="gh-graph" className="overflow-x-auto pb-1">
                    <p className="text-sm text-ink/60">Thinking..</p>
                </div>
                <p id="gh-total" className="font-mono text-xs text-ink/60 mt-3"></p>
            </div>
              <div className="border-2 border-surface py-4 px-4 rounded-2xl mt-4">
        <h3 className="font-mono text-sm text-ink mb-3">My Favorite song</h3>
        <iframe
            src="https://open.spotify.com/embed/track/0NGFAcYQVHCIdQea2qSs1I?utm_source=generator&si=474864e9125e4531"
            className="w-full rounded-xl"
            height="152"
            loading="lazy"
            title="Spotify player"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
    </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
{/* github */}
        
         <a href="https://github.com/RamdonnaKamaliah" target="_blank" rel="noopener noreferrer"
     aria-label="GitHub, buka di tab baru"
     class="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-2 border-surface bg-surface/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
    <div className="flex items-start justify-between">
      <span className="font-mono text-[11px] text-ink/50 transition group-hover:text-primary">
        $ open github<span class="opacity-0 group-hover:opacity-100 group-hover:animate-blink">_</span>
      </span>
      <span className="font-mono text-ink/40 transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
    </div>
    <svg className="w-10 h-10 text-ink/80 transition duration-300 group-hover:text-primary group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
    </svg>
    <div>
      <p className="font-semibold text-ink">GitHub</p>
      <p className="font-mono text-xs text-ink/60">@RamdonnaKamaliah</p>
    </div>
    <span className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"></span>
        </a>

{/* linkedin */}
        <a href="https://www.linkedin.com/in/ramdona-kamaliah-111b46334/" target="_blank" rel="noopener noreferrer"
     aria-label="LinkedIn, buka di tab baru"
     className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-2 border-surface bg-surface/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
    <div className="flex items-start justify-between">
      <span className="font-mono text-[11px] text-ink/50 transition group-hover:text-accent">
        $ connect --linkedin<span class="opacity-0 group-hover:opacity-100 group-hover:animate-blink">_</span>
      </span>
      <span className="font-mono text-ink/40 transition group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
    </div>
    <svg className="w-10 h-10 text-ink/80 transition duration-300 group-hover:text-accent group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 1 0 -4 0"/>
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"/>
    </svg>
    <div>
      <p className="font-semibold text-ink">LinkedIn</p>
      <p className="font-mono text-xs text-ink/60">Ramdona Kamaliah</p>
    </div>
    <span className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"></span>
  </a>

{/* Instagram */}

        <a href="https://www.instagram.com/kamalie.dev" target="_blank" rel="noopener noreferrer"
     aria-label="Instagram, buka di tab baru"
     className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border-2 border-surface bg-surface/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
    <div class="flex items-start justify-between">
      <span className="font-mono text-[11px] text-ink/50 transition group-hover:text-primary">
        $ view --instagram<span class="opacity-0 group-hover:opacity-100 group-hover:animate-blink">_</span>
      </span>
      <span className="font-mono text-ink/40 transition group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
    </div>
    <svg className="w-10 h-10 text-ink/80 transition duration-300 group-hover:text-primary group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M16.5 7.5v.01"/>
    </svg>
    <div>
      <p className="font-semibold text-ink">Instagram</p>
      <p className="font-mono text-xs text-ink/60">@kamalie.dev</p>
    </div>
    <span className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-primary/20 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"></span>
  </a>

    </div>


      </section>
    );
}

export default Media;