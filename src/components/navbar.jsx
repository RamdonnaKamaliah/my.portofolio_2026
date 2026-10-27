function Navbar(){
    return(
        <header className="w-full bg-surface py-4 px-8 sticky top-0 z-50">
             <nav className="max-w-6xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-ink inline-block"></span>
            </div>
            <span className="font-mono text-xs text-ink/70 hidden sm:inline">donna@portfolio:~$</span>
        </div>

        <ul className="flex gap-6 text-sm font-mono">
            <li><a href="#home" className="text-primary hover:underline">./home</a></li>
            <li><a href="#about" className="text-ink/70 hover:text-primary transition">./about</a></li>
            <li><a href="#project" className="text-ink/70 hover:text-primary transition">./project</a></li>
            <li><a href="#skill" className="text-ink/70 hover:text-primary transition">./skill</a></li>
        </ul>

    </nav>
        </header>
    );
}

export default Navbar;