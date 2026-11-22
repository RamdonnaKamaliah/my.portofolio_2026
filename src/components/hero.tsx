import React, { useState, useRef } from "react";

interface OutputLine {
  text: string;
  type: string;
}

function Terminal() {
  const [output, setOutput] = useState<OutputLine[]>([
    { text: 'Selamat datang! Ketik "help" untuk mulai.', type: "text-code-text/60" }
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const commands: Record<string, () => string[] | null> = {
    help: () => ["Perintah: about, projects, skills, experience, contact, theme, clear"],
    about: () => {
      scrollToSection("about");
      return ["Membuka ~/about ..."];
    },
    skills: () => {
      scrollToSection("skill");
      return ["Membuka ~/skill ..."];
    },
    experience: () => {
      scrollToSection("experience");
      return ["Membuka ~experience ..."];
    },
    projects: () => {
      scrollToSection("projects");
      return ["Membuka ~/projects ..."];
    },
    contact: () => {
      scrollToSection("contact");
      return ["Membuka ~/contact ..."];
    },
    theme: () => {
      return ["Tema diganti."];
    },
    clear: () => {
      setOutput([]);
      return null;
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = inputValue.trim();
    if (!raw) return;

    const newHistory = [...history, raw];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length);

    let newLines: OutputLine[] = [{ text: "$ " + raw, type: "text-code-str" }];
    const cmd = raw.toLowerCase();

    if (Object.hasOwn(commands, cmd)) {
      const result = commands[cmd]();
      if (result !== null) {
        newLines = [...newLines, ...result.map(line => ({ text: line, type: "" }))];
        setOutput((prev) => [...prev, ...newLines]);
      }
    } else {
      newLines.push({ text: `command not found: ${raw}. Ketik "help".`, type: "text-code-key" });
      setOutput((prev) => [...prev, ...newLines]);
    }

    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputValue(history[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < history.length) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputValue(history[nextIndex] || "");
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-code-bg text-code-text font-mono text-xs sm:text-sm rounded-xl border border-ink/15 px-5 py-4 h-64 flex flex-col cursor-text"
    >
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-code-text inline-block"></span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1" aria-live="polite">
        {output.map((line, index) => (
          <div key={index} className={line.type}>
            {line.text}
          </div>
        ))}
        <div ref={outputEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 pt-2">
        <label htmlFor="term-input" className="text-code-str">$</label>
        <input
          id="term-input"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          aria-label="Terminal"
          className="flex-1 bg-transparent outline-none text-code-text"
          autoFocus
        />
      </form>
    </div>
  );
}


interface HeroProps {}


export default function Hero({}: HeroProps) {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-accent mb-3">
            &gt; hello, world<span className="animate-blink">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Hai, I'm <span className="text-primary">Donna</span>
          </h1>

          <p className="font-mono text-sm text-ink/60 mt-2">
            Web Developer | Fullstack
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
              href="/cv-ramdona.pdf"
              download="CV_Siti_Kamaliah_Ramdona.pdf"
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

        <div className="flex flex-col justify-center">
          <Terminal />
        </div>

      </div>
    </section>
  );
}