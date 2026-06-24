const projects = [
  {
    icon: '💳',
    tag: 'Team Project · 2026',
    title: 'Naillaz — Fintech Dashboard',
    desc: 'Full-stack financial dashboard built with a 6-person team. Features authentication, live API integration, interactive charts, budget tracking and savings goals.',
    stack: ['Next.js', 'TypeScript', 'Chart.js', 'REST API', 'JWT Auth'],
    link: 'https://github.com/odurowaa-jd/spendwise-dashboard',
    color: 'bg-blue-500/10',
    span: true,
  },
  {
    icon: '⛅',
    tag: 'Live · Vercel',
    title: 'Skye — Weather App',
    desc: 'Real-time weather app with 5-day forecast, hourly data, geolocation, Celsius/Fahrenheit toggle and search history.',
    stack: ['React', 'Vite', 'OpenWeatherMap'],
    link: 'https://skye-weather-app-livid.vercel.app/',
    color: 'bg-blue-500/10',
  },
  {
    icon: '🤖',
    tag: 'AI Integration',
    title: 'NovaMind — AI Assistant',
    desc: 'Personalized AI assistant powered by Claude AI. Dark theme UI with real-time responses, typing indicators and user personalization logic.',
    stack: ['JavaScript', 'Claude AI', 'CSS3'],
    link: 'https://github.com/Harehood100',
    color: 'bg-purple-500/10',
  },
  {
    icon: '⚡',
    tag: 'Backend',
    title: 'REST API — CRUD Operations',
    desc: 'RESTful API with full Create, Read, Update and Delete operations. Documented with Postman collection and clean GitHub commit history.',
    stack: ['Node.js', 'Express.js', 'Postman'],
    link: 'https://github.com/Harehood100',
    color: 'bg-green-500/10',
  },
  {
    icon: '🔗',
    tag: 'Live · Vercel',
    title: 'SOELinks — Company Website',
    desc: 'Responsive company website built with React and Tailwind CSS. Features hero section with background image and responsive navbar.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://soelinks-project.vercel.app/',
    color: 'bg-orange-500/10',
  },
]

function Projects() {
  return (<section id="projects" className="py-28 px-6 bg-[#0d1117]"> <div className="max-w-6xl mx-auto"> <div className="reveal mb-16"> <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-4">
    Selected Work </p>

    ```
    <h2 className="font-display font-bold text-4xl md:text-5xl text-[#e6edf3]">
      Projects
    </h2>
  </div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className={`project-card reveal bg-[#07090f] rounded-2xl p-8 ${project.span ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
        >
          <div className="flex justify-between items-start mb-6">
            <div
              className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center text-2xl`}
            >
              {project.icon}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-arrow text-[#8b949e] transition-all text-xl"
            >
              ↗
            </a>
          </div>

          <p className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase mb-2">
            {project.tag}
          </p>

          <h3 className="font-display font-bold text-xl text-[#e6edf3] mb-3">
            {project.title}
          </h3>

          <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1 rounded-full border border-[#21262d] text-[#8b949e]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

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
