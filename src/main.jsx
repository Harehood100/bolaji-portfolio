import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const observeReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, index * 80)

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  document
    .querySelectorAll('.reveal')
    .forEach((element) => observer.observe(element))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

window.addEventListener('load', observeReveal)