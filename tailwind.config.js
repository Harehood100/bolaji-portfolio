
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07090f',
        bg2: '#0d1117',
        bg3: '#161b22',
        border: '#21262d',
        accent: '#3b82f6',
        accent2: '#60a5fa',
        muted: '#8b949e',
        text: '#e6edf3',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}