function About() {
    const quickFacts = [
        { label: 'Location', value: 'Lagos, Nigeria 🇳🇬' },
        { label: 'Focus', value: 'Frontend Development' },
        { label: 'Currently Building', value: 'SOELinks Website' },
        { label: 'Learning', value: 'Advanced React Patterns' },
        { label: 'Availability', value: 'Open to Work ✓', green: true },
        { label: 'Preference', value: 'Remote / Hybrid' },
    ]

    return (<section id="about" className="py-28 px-6"> <div className="max-w-6xl mx-auto"> <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left */} <div className="reveal"> <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">
            About Me </p>

            ```
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3] leading-tight mb-6">
                I build things
                <br />
                <span className="gradient-text">for the web.</span>
            </h2>

            <p className="text-[#8b949e] leading-relaxed mb-4">
                I'm a self-taught frontend developer based in Lagos, Nigeria. A
                few months ago I didn't fully understand what a terminal was.
                Today I've shipped fintech dashboards, AI-powered apps and real
                APIs—and I'm just getting started.
            </p>

            <p className="text-[#8b949e] leading-relaxed mb-4">
                I graduated from the Betechified Frontend Development Program in
                2026, where I worked as the frontend developer on a 6-person
                cross-functional team building a full-stack fintech product with
                real API integration.
            </p>

            <p className="text-[#8b949e] leading-relaxed mb-8">
                I care about clean code, good design and building things that
                actually work. I'm currently open to remote frontend developer
                internships and junior roles.
            </p>

            <a
                href="https://github.com/Harehood100"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors font-mono"
            >
                github.com/Harehood100 ↗
            </a>
        </div>

        {/* Right */}
        <div className="reveal">
            <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-8">
                <p className="font-mono text-xs text-[#8b949e] tracking-widest uppercase mb-6">
                    Quick Facts
                </p>

                {quickFacts.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex justify-between items-center py-3 ${index < quickFacts.length - 1
                            ? 'border-b border-[#21262d]'
                            : ''
                            }`}
                    >
                        <span className="text-sm text-[#8b949e]">
                            {item.label}
                        </span>

                        <span
                            className={`text-sm font-medium ${item.green ? 'text-green-400' : 'text-[#e6edf3]'
                                }`}
                        >
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
    </section>


    )
}

export default About
