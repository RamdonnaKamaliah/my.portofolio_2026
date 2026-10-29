import React, { useState, useRef } from "react";
import Experience from "./experience";

function Terminal() {
  // State untuk menyimpan baris text output terminal
  const [output, setOutput] = useState([
    { text: 'Selamat datang! Ketik "help" untuk mulai.', type: "text-code-text/60" }
  ]);
  // State untuk input teks saat ini
  const [inputValue, setInputValue] = useState("");
  // State untuk history command
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Ref untuk manipulasi scroll & focus otomatis
  const inputRef = useRef(null);
  const outputEndRef = useRef(null);

  // Auto-scroll ke paling bawah setiap ada baris baru di terminal
  // useEffect(() => {
  //   outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [output]);

  // Fungsi scroll ke section lain di page
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // List perintah/commands
  const commands = {
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
      return ["Membuka ~experience ..."]
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
      if (typeof toggleTheme === "function") toggleTheme(); 
      return ["Tema diganti."];
    },
    clear: () => {
      setOutput([]);
      return null;
    },
  };

  // Handler Submit Form Terminal
  const handleSubmit = (e) => {
    e.preventDefault();
    const raw = inputValue.trim();
    if (!raw) return;

    // Update history
    const newHistory = [...history, raw];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length);

    // Tambah baris command ke output
    let newLines = [{ text: "$ " + raw, type: "text-code-str" }];

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

    setInputValue(""); // Reset kolom input
  };

  // Handler Key ArrowUp & ArrowDown untuk History
  const handleKeyDown = (e) => {
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
      {/* Tombol Tiga Warna Khas Mac/Terminal */}
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-accent inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-code-text inline-block"></span>
      </div>

      {/* Output Area */}
      <div className="flex-1 overflow-y-auto space-y-1" aria-live="polite">
        {output.map((line, index) => (
          <div key={index} className={line.type}>
            {line.text}
          </div>
        ))}
        {/* Anchor untuk auto-scroll */}
        <div ref={outputEndRef} />
      </div>

      {/* Form Input */}
      <form onSubmit={handleSubmit} className="flex gap-2 pt-2">
        <label htmlFor="term-input" className="text-code-str">
          $
        </label>
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


export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Kolom Kiri: Teks & Keterangan */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-accent mb-3">
            &gt; hello, world<span className="animate-blink">_</span>
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            Hai, I'm <span className="text-primary">Donna</span>
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

        <div className="flex flex-col justify-center">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
