function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-[#21262d] py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-mono text-xs text-[#8b949e] text-center md:text-left">
                    © {currentYear} Bolaji Bakare. Built with React & Tailwind.
                </p>

                <p className="font-mono text-xs text-[#8b949e] text-center md:text-right">
                    Lagos, Nigeria 🇳🇬 · Open to Remote
                </p>
            </div>
        </footer>
    )
}

export default Footer