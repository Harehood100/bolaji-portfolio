const projects = [
  {
    icon: '💳',
    tag: 'Team Project · 2026',
    title: 'Naillaz — Fintech Dashboard',
    desc: 'Full-stack financial dashboard built with a 6-person team. Features authentication, live API integration, interactive charts, budget tracking and savings goals.',
    stack: ['Next.js', 'TypeScript', 'Chart.js', 'REST API', 'JWT Auth'],
    link: 'https://github.com/odurowaa-jd/spendwise-dashboard',
    color: 'bg-blue-500/10',
    featured: true,
  },
  {
    icon: '📈',
    tag: 'Live · Vercel',
    title: 'CryptoDash — Crypto Dashboard',
    desc: 'Real-time cryptocurrency metrics dashboard. Top 20 coins by market cap, 7-day price history charts, animated stats, search & sort, dark/light mode — all powered by CoinGecko API.',
    stack: ['Next.js', 'TypeScript', 'Zustand', 'Recharts', 'CoinGecko API', 'Tailwind'],
    link: 'https://crypto-dashboard-ebon-iota.vercel.app',
    color: 'bg-yellow-500/10',
  },
  {
    icon: '⛅',
    tag: 'Live · Vercel',
    title: 'Skye — Weather App',
    desc: 'Real-time weather app with 5-day forecast, hourly data, geolocation, Celsius/Fahrenheit toggle and search history saved in localStorage.',
    stack: ['React', 'Vite', 'OpenWeatherMap API'],
    link: 'https://skye-weather-app-livid.vercel.app/',
    color: 'bg-blue-500/10',
  },
  {
    icon: '🤖',
    tag: 'AI Integration',
    title: 'NovaMind — AI Assistant',
    desc: 'Personalized AI assistant powered by Claude AI. Dark theme UI with real-time responses, typing indicators, suggested prompts and user personalization logic.',
    stack: ['JavaScript', 'Claude AI API', 'CSS3'],
    link: 'https://github.com/Harehood100',
    color: 'bg-purple-500/10',
  },
  {
    icon: '🔗',
    tag: 'Live · Vercel',
    title: 'SOELinks — Company Website',
    desc: 'Responsive company website built with React and Tailwind CSS. Features hero section with background image, responsive navbar and component-based architecture.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://soelinks-project.vercel.app/',
    color: 'bg-orange-500/10',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3]">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`project-card reveal bg-[#07090f] rounded-2xl p-8 block ${p.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-2xl`}>
                  {p.icon}
                </div>
                <span className="project-arrow text-[#8b949e] transition-all text-xl">↗</span>
              </div>
              <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-2">{p.tag}</p>
              <h3 className="font-display font-bold text-xl text-[#e6edf3] mb-3">{p.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s, j) => (
                  <span key={j} className="font-mono text-xs px-3 py-1 rounded-full border border-[#21262d] text-[#8b949e]">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/Harehood100"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#8b949e] hover:text-[#3b82f6] transition-colors font-mono"
          >
            View all projects on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
