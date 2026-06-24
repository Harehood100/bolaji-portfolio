import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navLinks = ['about', 'projects', 'experience', 'skills', 'contact']

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 border-b border-[#21262d] bg-[#07090f]/80 backdrop-blur-xl transition-shadow ${scrolled ? 'shadow-lg shadow-black/20' : ''
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    className="font-display font-bold text-lg tracking-tight"
                >
                    <span className="gradient-text">BB</span>
                    <span className="text-[#8b949e]">.</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                className="nav-link text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors capitalize"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hire Me Button */}
                <a
                    href="mailto:bolajibakare498@gmail.com"
                    className="hidden md:block text-sm font-medium px-4 py-2 rounded-lg border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all"
                >
                    Hire Me
                </a>

                {/* Hamburger */}
                <button
                    className="md:hidden text-[#8b949e] hover:text-[#e6edf3]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu fixed inset-y-0 right-0 w-72 bg-[#0d1117] border-l border-[#21262d] z-40 p-8 pt-24 flex flex-col gap-6 ${menuOpen ? 'open' : ''
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${link}`}
                        className="text-lg text-[#8b949e] hover:text-[#e6edf3] transition-colors capitalize"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link}
                    </a>
                ))}

                <a
                    href="mailto:bolajibakare498@gmail.com"
                    className="mt-4 text-center px-4 py-3 rounded-lg bg-[#3b82f6] text-white font-medium"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    )
}

export default Navbar