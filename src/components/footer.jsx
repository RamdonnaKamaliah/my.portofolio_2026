function Footer(){
    return(
        <section className=" max-w-6xl mx-auto px-4 sm:px-8 py-16">

        <div className="w-full">
            <p className="text-center font-mono text-sm">-- end of file --</p>
        </div>
         <div className="flex items-center gap-2 pt-8">
            <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-code-text inline-block"></span>
        </div>

        <div className="pt-6 grid grid-cols-2 md:grid-cols-2 justify-between">
            <p className="text-accent text-sm font-mono">donna@portfolio:~$</p>
            <div className="flex flex-wrap gap-4 md:justify-self-end">
                <a href="#" className="font-mono text-sm text-ink/60">Instagram</a>
                <a href="#" className="font-mono text-sm text-ink/60">GIthub</a>
                <a href="#" className="font-mono text-sm text-ink/60">Linkedin</a>
            </div>
        </div>

        </section>
    );
}

export default Footer;