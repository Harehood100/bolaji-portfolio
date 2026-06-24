function Hero() {
  return (<section
    id="hero"
    className="min-h-screen flex items-center pt-16 px-6"
  > <div className="max-w-6xl mx-auto w-full py-24">
      {/* Available Badge */} <div className="flex items-center gap-3 mb-8"> <div className="w-2.5 h-2.5 rounded-full bg-green-400 active-dot"></div> <span className="font-mono text-xs text-[#8b949e] tracking-widest uppercase">
        Available for opportunities </span> </div>

      ```
      {/* Name */}
      <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
        <span className="text-[#e6edf3]">Bolaji</span>
        <br />
        <span className="gradient-text glow">Bakare.</span>
      </h1>

      {/* Role */}
      <p className="font-display text-xl md:text-2xl text-[#8b949e] font-medium mb-4 max-w-xl">
        Frontend Developer — building fast, responsive and interactive web
        experiences from{' '}
        <span className="text-[#e6edf3]">Lagos, Nigeria 🇳🇬</span>
      </p>

      {/* Description */}
      <p className="text-[#8b949e] text-base max-w-lg leading-relaxed mb-10">
        I turn ideas into pixel-perfect products. React, Next.js,
        TypeScript—and enough curiosity to keep learning every single day.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#3b82f6] text-white font-display font-semibold rounded-lg hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25"
        >
          View My Work
        </a>

        <a
          href="https://github.com/Harehood100"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-[#21262d] text-[#8b949e] font-display font-semibold rounded-lg hover:border-[#3b82f6] hover:text-[#e6edf3] transition-all"
        >
          GitHub ↗
        </a>

        <a
          href="mailto:bolajibakare498@gmail.com"
          className="px-6 py-3 border border-[#21262d] text-[#8b949e] font-display font-semibold rounded-lg hover:border-[#3b82f6] hover:text-[#e6edf3] transition-all"
        >
          Let's Talk
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 border-t border-[#21262d] pt-8">
        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            12+
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            Projects Built
          </p>
        </div>

        <div className="w-px bg-[#21262d]"></div>

        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            6
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            Tech Stack
          </p>
        </div>

        <div className="w-px bg-[#21262d]"></div>

        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            1
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            Team Capstone
          </p>
        </div>

        <div className="w-px bg-[#21262d]"></div>

        <div>
          <p className="font-display font-bold text-3xl text-[#3b82f6]">
            Open
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            To Work
          </p>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Hero
