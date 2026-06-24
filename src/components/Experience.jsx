const experiences = [
    {
        title: 'Frontend Developer — Capstone Team',
        company: 'Betechified · Naillaz Fintech Dashboard',
        year: '2026',
        points: [
            'Built the complete frontend UI using Next.js and TypeScript as part of a 6-person cross-functional team',
            'Implemented full authentication system — login, signup, OTP verification, forgot and reset password',
            'Connected frontend to live backend API endpoints with JWT Bearer token authentication',
            'Built interactive charts using Chart.js — income vs expenses, spending breakdown and savings goals',
            'Delivered responsive dashboard, income, expenses, savings, settings and notifications pages',
        ],
    },
    {
        title: 'Frontend Development Program',
        company: 'Betechified · Graduate',
        year: '2026',
        points: [
            'Completed a structured program covering HTML, CSS, JavaScript, React and modern web development',
            'Built 12+ projects across the duration of the program — from simple forms to full-stack applications',
            'Graduated with a certificate in Frontend Development',
        ],
    },
]

function Experience() {
    return (<section id="experience" className="py-28 px-6"> <div className="max-w-6xl mx-auto"> <div className="reveal mb-16"> <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">
        Background </p>

        ```
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3]">
            Experience
        </h2>
    </div>

        <div className="space-y-6">
            {experiences.map((experience) => (
                <div
                    key={`${experience.title}-${experience.year}`}
                    className="reveal bg-[#0d1117] border border-[#21262d] rounded-2xl p-8 hover:border-[#3b82f6]/40 transition-colors"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                            <h3 className="font-display font-bold text-xl text-[#e6edf3] mb-1">
                                {experience.title}
                            </h3>

                            <p className="text-[#3b82f6] font-medium text-sm">
                                {experience.company}
                            </p>
                        </div>

                        <span className="font-mono text-xs text-[#8b949e] border border-[#21262d] px-3 py-1.5 rounded-lg whitespace-nowrap">
                            {experience.year}
                        </span>
                    </div>

                    <ul className="space-y-2">
                        {experience.points.map((point) => (
                            <li
                                key={point}
                                className="flex gap-3 text-sm text-[#8b949e]"
                            >
                                <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">
                                    →
                                </span>

                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
    </section>


    )
}

export default Experience
