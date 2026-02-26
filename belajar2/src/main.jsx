import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col gap-6"> 
        <Navbar />
        {/* <Hero /> */}
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
