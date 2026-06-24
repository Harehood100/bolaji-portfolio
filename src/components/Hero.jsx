{/* Main Content */ }
<div className="relative z-10 w-full max-w-6xl mx-auto py-24">
  <div className="grid items-center gap-12 md:grid-cols-2">

    {/* Left — Text Content */}
    <div>
      {/* Available Badge */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 active-dot"></div>
        <span className="font-mono text-xs text-[#8b949e] tracking-widest uppercase">
          Available for opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4">
        <span className="text-[#e6edf3]">Bolaji</span>
        <br />
        <span className="gradient-text glow">Bakare.</span>
      </h1>

      {/* Typing Effect */}
      <div className="mb-4">
        <span className="font-display text-xl md:text-2xl text-[#3b82f6] font-semibold typing-cursor">
          {typedText}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#8b949e] text-base max-w-lg leading-relaxed mb-10">
        Building fast, responsive and interactive web experiences from{' '}
        <span className="text-[#e6edf3]">Lagos, Nigeria 🇳🇬</span> — React,
        Next.js, TypeScript and enough curiosity to keep learning every single
        day.
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

      {/* Stats with Counter */}
      <div
        ref={statsRef}
        className="flex flex-wrap gap-8 border-t border-[#21262d] pt-8"
      >
        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            {projects}+
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            Projects Built
          </p>
        </div>

        <div className="w-px bg-[#21262d]"></div>

        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            {techs}+
          </p>
          <p className="text-xs text-[#8b949e] mt-1 tracking-wide">
            Technologies
          </p>
        </div>

        <div className="w-px bg-[#21262d]"></div>

        <div>
          <p className="font-display font-bold text-3xl text-[#e6edf3]">
            {capstone}
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

    {/* Right — Profile Image */}
    <div className="hidden md:flex justify-center items-center">
      <div className="relative">
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent)',
          }}
        />

        {/* Rotating border ring */}
        <div
          className="absolute -inset-1 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, #3b82f6, #818cf8, #06b6d4, #3b82f6)',
            animation: 'spin 6s linear infinite',
            padding: '2px',
          }}
        >
          <div className="w-full h-full rounded-full bg-[#07090f]" />
        </div>

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Bolaji Bakare"
          className="relative w-72 h-72 rounded-full object-cover object-top border-4 border-[#07090f]"
        />

        {/* Floating Badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0d1117] border border-[#21262d] rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-green-400 active-dot"></div>
          <span className="font-mono text-xs text-[#8b949e]">
            Available to hire
          </span>
        </div>
      </div>
    </div>

  </div>
</div>