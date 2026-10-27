function Experience() {
    return(
        <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
            <div>
                <h2 className="ont-mono text-ink/60 text-sm">05 / Experience</h2>
            </div>

            <div className="mt-4 rounded-2xl border-2 border-surface bg-surface/40 p-5 sm:p-6">
                <div className="flex items-center gap-4">
                    <img src="./img/foto_dona.jpeg" alt="Logo" className="w-12 h-12 rounded-lg object-cover bg-ink/10" />
                        <div>
                        <h3 className="text-lg font-semibold text-ink">PT. Bentang Altur Teknologia</h3>
                        <p className="text-sm text-ink/60">Full-time · 4 bln</p>
                        <p className="text-sm text-ink/60">East Jakarta, Jakarta, Indonesia · On-site</p>
                    </div>
                </div>
    <ol className="relative mt-6 ml-1.5 space-y-8 [&>li:last-child>.line]:hidden">
      <li className="relative ml-8">
        <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-primary"></span>
        <span className="line absolute -left-[19px] top-[22px] -bottom-[34px] w-0.5 bg-ink/15"></span>
        
        <h4 className="font-semibold text-ink">Technical Troubleshooting</h4>
        <p className="text-sm text-ink/60">Jun 2026 – Sep 2026 · 4 bln</p>

        <p className="desc line-clamp-2 text-sm text-ink/80 leading-relaxed mt-2">
          Mengelola dan melakukan pengujian sistem serta pemecahan masalah teknis untuk aplikasi pendukung perusahaan.
        </p>
        <button type="button" data-more aria-expanded="false" class="text-sm text-primary hover:underline mt-1">more</button>

        <p className="mt-3 flex items-start gap-2 font-mono text-xs text-ink/80">
          <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 5h12l3 5l-9 10l-9 -10z"/>
          </svg>
          Extract, Transform, Load (ETL), Database Validation dan +4 skill
        </p>
      </li>

      <li className="relative ml-8">
        <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-primary"></span>
        <span className="line absolute -left-[19px] top-[22px] -bottom-[34px] w-0.5 bg-ink/15"></span>
        
        <h4 className="font-semibold text-ink">Application Support Specialist & QA Tester</h4>
        <p className="text-sm text-ink/60">Mei 2026 – Jun 2026 · 2 bln</p>

        <p className="desc line-clamp-2 text-sm text-ink/80 leading-relaxed mt-2">
          Memastikan integritas master data BTI system dan pengujian fungsionalitas fitur aplikasi internal.
        </p>
        <button type="button" data-more aria-expanded="false" className="text-sm text-primary hover:underline mt-1">more</button>

        <p className="mt-3 flex items-start gap-2 font-mono text-xs text-ink/80">
          <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 5h12l3 5l-9 10l-9 -10z"/>
          </svg>
          Software Testing, Quality Assurance, SQL dan +3 skill
        </p>
      </li>
    </ol>
</div>
</section>
    );
}

export default Experience;