const skillGroups = [
    {
        label: 'Languages',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Node.js'],
    },
    {
        label: 'Frameworks & Libraries',
        skills: [
            'React.js',
            'Next.js',
            'Bootstrap 5',
            'Tailwind CSS',
            'Chart.js',
            'Axios',
        ],
    },
    {
        label: 'Tools & Platforms',
        skills: [
            'Git & GitHub',
            'VS Code',
            'Postman',
            'Vercel',
            'Netlify',
            'Figma',
        ],
    },
]

function Skills() {
    return (<section id="skills" className="py-28 px-6 bg-[#0d1117]"> <div className="max-w-6xl mx-auto"> <div className="reveal mb-16"> <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">
        What I Work With </p>

        ```
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3]">
            Skills
        </h2>
    </div>

        <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group) => (
                <div key={group.label} className="reveal">
                    <p className="font-mono text-xs text-[#8b949e] tracking-widest uppercase mb-4">
                        {group.label}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                            <span
                                key={skill}
                                className="skill-pill font-mono text-xs px-3 py-2 rounded-lg border border-[#21262d] text-[#8b949e] cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>


    )
}

export default Skills
