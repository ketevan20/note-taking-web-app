import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldBeDark =
  localStorage.theme === "dark" ||
  (localStorage.theme === "system" && prefersDark);

document.documentElement.classList.toggle("dark", shouldBeDark);

const font = localStorage.font === 'sans-serif' ? 'sans-serif' : localStorage.font === 'serif' ? 'serif' : 'monospace';
document.documentElement.classList.add(font);

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
