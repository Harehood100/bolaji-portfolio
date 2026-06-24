function Contact() {
    const socialLinks = [
        {
            label: 'GitHub',
            href: 'https://github.com/Harehood100',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/bakare-bolaji-4b0b163b3/',
        },
        {
            label: 'Twitter/X',
            href: 'https://x.com/iam_harehood?s=21',
        },
        {
            label: 'Email',
            href: 'mailto:bolajibakare498@gmail.com',
        },
    ]

    return (<section id="contact" className="py-28 px-6"> <div className="max-w-3xl mx-auto text-center"> <div className="reveal"> <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">
        Get In Touch </p>

        ```
        <h2 className="font-display font-bold text-4xl md:text-6xl text-[#e6edf3] leading-tight mb-6">
            Let's work
            <br />
            <span className="gradient-text">together.</span>
        </h2>

        <p className="text-[#8b949e] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I'm currently open to remote frontend developer internships and
            junior roles. If you have an opportunity, a project, or just want
            to say hi—my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
                href="mailto:bolajibakare498@gmail.com"
                className="px-8 py-4 bg-[#3b82f6] text-white font-display font-semibold rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25 text-lg"
            >
                Send Me an Email
            </a>

            <a
                href="https://www.linkedin.com/in/bakare-bolaji-4b0b163b3/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-[#21262d] text-[#8b949e] font-display font-semibold rounded-xl hover:border-[#3b82f6] hover:text-[#e6edf3] transition-all text-lg"
            >
                LinkedIn ↗
            </a>
        </div>

        <div className="flex justify-center gap-6 pt-8 border-t border-[#21262d]">
            {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="text-sm text-[#8b949e] hover:text-[#3b82f6] transition-colors font-mono"
                >
                    {link.label}
                </a>
            ))}
        </div>
    </div>
    </div>
    </section>


    )
}

export default Contact
