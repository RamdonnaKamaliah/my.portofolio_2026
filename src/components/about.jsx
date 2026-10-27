import donnaImg from '../assets/donna.png';

function About (){
    return(
        <section id="about" className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
            <div>
                <h2 className="font-mono text-ink/60 text-sm">02 / About</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-4">
                {/* Kolom Kiri: Foto / Card */}
                <div className="relative max-w-md mx-auto md:mx-0 w-full aspect-square">
                    <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 z-0"></div>

                    <div className="relative z-10 bg-white rounded-2xl border-2 border-surface overflow-hidden h-full w-full shadow-lg">
                        <img src={donnaImg} alt="foto-dona" className="w-full h-full object-cover" />
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
                    
                    <h1 className="font-semibold text-xl text-ink">Developer | IT Support</h1>
                    
                    <p className="text-md text-ink">
                        Hi there! I’m a passionate coder girl who believes in the beauty of clean code and seamless user experiences. I love building fast, neat, and intuitive web applications. While I appreciate good design, my true strength lies in backend development and database management—honed during my previous role as an IT Web Support where I extensively worked with SQL.
                    </p>    
                    
                    <div className="w-full px-4 py-5 border-2 border-surface shadow-lg rounded-2xl flex flex-col gap-2">
                        <p className="text-ink/60">Lokasi: ...</p>
                        <p className="text-ink/60">Stack: PHP, Laravel, React, SQL, dll</p>
                        <p className="text-ink/60">Side Project: Dflorar</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;