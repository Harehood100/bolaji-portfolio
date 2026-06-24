function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div className="reveal">
                        <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">About Me</p>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3] leading-tight mb-6">
                            Crafting digital<br />
                            <span className="gradient-text">experiences that matter.</span>
                        </h2>
                        <p className="text-[#8b949e] leading-relaxed mb-4">
                            I'm a Frontend Developer specialising in building high-performance, scalable web applications. My approach combines technical precision with a sharp eye for design, delivering interfaces that are both beautiful and functional.
                        </p>
                        <p className="text-[#8b949e] leading-relaxed mb-4">
                            I work across the full frontend stack, from architecting component systems in React and Next.js to integrating complex backend APIs and implementing secure authentication flows. I bring the same level of attention to a pixel as I do to a pull request.
                        </p>
                        <p className="text-[#8b949e] leading-relaxed mb-8">
                            Beyond the code, I understand the business side of software. Every interface I build is designed to convert, retain and delight users because great software is not just about what works, it's about what wins.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a

                                href="https://github.com/Harehood100"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors font-mono"
                            >
                                github.com/Harehood100 ↗
                            </a>
                            <a

                                href="https://www.linkedin.com/in/bakare-bolaji-4b0b163b3/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors font-mono"
                            >
                                linkedin.com/in/bakare-bolaji ↗
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="reveal">
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-6 hover:border-[#3b82f6]/40 transition-colors">
                                <p className="font-display font-black text-4xl text-[#3b82f6] mb-1">12+</p>
                                <p className="text-sm text-[#8b949e]">Projects Delivered</p>
                            </div>
                            <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-6 hover:border-[#3b82f6]/40 transition-colors">
                                <p className="font-display font-black text-4xl text-[#3b82f6] mb-1">6+</p>
                                <p className="text-sm text-[#8b949e]">Technologies Mastered</p>
                            </div>
                            <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-6 hover:border-[#3b82f6]/40 transition-colors">
                                <p className="font-display font-black text-4xl text-[#3b82f6] mb-1">100%</p>
                                <p className="text-sm text-[#8b949e]">Remote Ready</p>
                            </div>
                            <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-6 hover:border-[#3b82f6]/40 transition-colors">
                                <p className="font-display font-black text-4xl text-[#3b82f6] mb-1">1</p>
                                <p className="text-sm text-[#8b949e]">Team Capstone Shipped</p>
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-[#0d1117] border border-[#21262d] rounded-2xl p-6">
                            <p className="font-mono text-xs text-[#8b949e] tracking-widest uppercase mb-4">Profile</p>
                            {[
                                { label: 'Specialisation', value: 'Frontend Development' },
                                { label: 'Stack', value: 'React · Next.js · TypeScript' },
                                { label: 'Location', value: 'Lagos, Nigeria 🇳🇬' },
                                { label: 'Availability', value: 'Open to Work ✓', green: true },
                                { label: 'Preference', value: 'Remote / Hybrid' },
                            ].map((item, i, arr) => (
                                <div
                                    key={i}
                                    className={`flex justify-between items-center py-3 ${i < arr.length - 1 ? 'border-b border-[#21262d]' : ''}`}
                                >
                                    <span className="text-sm text-[#8b949e]">{item.label}</span>
                                    <span className={`text-sm font-medium ${item.green ? 'text-green-400' : 'text-[#e6edf3]'}`}>
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