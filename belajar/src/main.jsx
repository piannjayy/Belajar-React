import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Maps from './pages/Maps.jsx'
import Post from './pages/Post.jsx'
import Detail from './pages/Detail.jsx'
import Aksata from './pages/Aksata.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar /> */}
    <App />
    {/* <Maps /> */}
    {/* <Post /> */}
    {/* <Footer /> */}
    {/* <Detail /> */}
    {/* <Aksata /> */}
  </StrictMode>,
)
