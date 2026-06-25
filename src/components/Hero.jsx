import { useState, useEffect, useRef } from 'react'
import profileImg from '../assets/profile.jpg'

// Typing effect hook
function useTypingEffect(words, speed = 100, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex(prev => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }, isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, speed, pause])

  return displayed
}

// Counter hook
function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, started])

  return count
}

// Floating tech icons
const techIcons = [
  { icon: '⚛️', label: 'React', top: '15%', left: '8%', delay: '0s', duration: '6s' },
  { icon: '▲', label: 'Next.js', top: '20%', right: '10%', delay: '1s', duration: '7s' },
  { icon: '🟦', label: 'TypeScript', top: '60%', left: '5%', delay: '2s', duration: '8s' },
  { icon: '🎨', label: 'Tailwind', top: '70%', right: '8%', delay: '0.5s', duration: '6.5s' },
  { icon: '🟨', label: 'JavaScript', top: '40%', left: '3%', delay: '1.5s', duration: '7.5s' },
  { icon: '🐙', label: 'GitHub', top: '35%', right: '5%', delay: '2.5s', duration: '9s' },
]

function Hero() {
  const typedText = useTypingEffect([
    'Frontend Developer',
    'React Specialist',
    'UI Engineer',
    'Next.js Developer',
  ], 80, 2200)

  const statsRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  const projects = useCounter(12, 1500, statsStarted)
  const techs = useCounter(6, 1200, statsStarted)
  const capstone = useCounter(1, 800, statsStarted)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-6 relative overflow-hidden">

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent)',
            top: '-5%', left: '-5%',
            animation: 'floatOrb 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #818cf8, transparent)',
            bottom: '10%', right: '-5%',
            animation: 'floatOrb 10s ease-in-out infinite reverse'
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #06b6d4, transparent)',
            top: '50%', left: '50%',
            animation: 'floatOrb 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((item, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex flex-col items-center gap-1 pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animation: `floatIcon ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
            opacity: 0.35,
          }}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="font-mono text-[9px] text-[#8b949e] tracking-widest">{item.label}</span>
        </div>
      ))}

      {/* CSS for animations */}
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .typing-cursor::after {
          content: '|';
          color: #3b82f6;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text Content */}
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
              <span className="text-[#e6edf3]">Bolaji</span><br />
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
              <span className="text-[#e6edf3]">Lagos, Nigeria 🇳🇬</span> — React, Next.js, TypeScript and enough curiosity to keep learning every single day.
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

            {/* Stats with counter */}
            <div ref={statsRef} className="flex flex-wrap gap-8 border-t border-[#21262d] pt-8">
              <div>
                <p className="font-display font-bold text-3xl text-[#e6edf3]">{projects}+</p>
                <p className="text-xs text-[#8b949e] mt-1 tracking-wide">Projects Built</p>
              </div>
              <div className="w-px bg-[#21262d]"></div>
              <div>
                <p className="font-display font-bold text-3xl text-[#e6edf3]">{techs}+</p>
                <p className="text-xs text-[#8b949e] mt-1 tracking-wide">Technologies</p>
              </div>
              <div className="w-px bg-[#21262d]"></div>
              <div>
                <p className="font-display font-bold text-3xl text-[#e6edf3]">{capstone}</p>
                <p className="text-xs text-[#8b949e] mt-1 tracking-wide">Team Capstone</p>
              </div>
              <div className="w-px bg-[#21262d]"></div>
              <div>
                <p className="font-display font-bold text-3xl text-[#3b82f6]">Open</p>
                <p className="text-xs text-[#8b949e] mt-1 tracking-wide">To Work</p>
              </div>
            </div>

          </div>
          {/* END LEFT */}

          {/* RIGHT — Profile Image */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">

              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
              />

              {/* Rotating gradient border */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '-3px',
                  background: 'conic-gradient(from 0deg, #3b82f6, #818cf8, #06b6d4, #3b82f6)',
                  animation: 'spin 6s linear infinite',
                  borderRadius: '50%',
                }}
              />

              {/* White gap between border and image */}
              <div
                className="absolute rounded-full bg-[#07090f]"
                style={{ inset: '1px' }}
              />

              {/* Profile Image */}
              <img
                src={profileImg}
                alt="Bolaji Bakare"
                className="relative w-72 h-72 rounded-full object-cover object-top"
                style={{ zIndex: 1 }}
              />

              {/* Available badge */}
              <div
                className="absolute left-1/2 bg-[#0d1117] border border-[#21262d] rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                style={{
                  bottom: '-16px',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 active-dot"></div>
                <span className="font-mono text-xs text-[#8b949e]">Available to hire</span>
              </div>

            </div>
          </div>
          {/* END RIGHT */}

        </div>
      </div>

    </section>
  )
}

export default Hero
