import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    const navLinks = [
        { href: '#home', label: './home' },
        { href: '#about', label: './about' },
        { href: '#projects', label: './project' },
        { href: '#skill', label: './skill' },
    ];

    const handleNavClick = (href) => {
        setActiveSection(href);
        setIsOpen(false); // Tutup menu mobile setelah diklik
    };

    return (
        <header className="w-full bg-surface py-4 px-6 md:px-8 sticky top-0 z-50 shadow-sm">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                
                {/* Logo / Terminal Indicator */}
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-ink inline-block"></span>
                    </div>
                    <span className="font-mono text-xs text-ink/70 hidden sm:inline">donna@portfolio:~$</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm font-mono">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setActiveSection(link.href)}
                                    className={`transition ${
                                        isActive
                                            ? 'text-primary underline font-semibold'
                                            : 'text-ink/70 hover:text-primary'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-ink/80 focus:outline-none p-1"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-ink/10 py-4 px-6 flex flex-col gap-4 text-sm font-mono shadow-md">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`block transition ${
                                        isActive
                                            ? 'text-primary underline font-semibold'
                                            : 'text-ink/70 hover:text-primary'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </header>
    );
}

export default Navbar;