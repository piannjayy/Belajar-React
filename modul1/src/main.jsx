import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fecth from './pages/Fecth.jsx'
import Axios from './pages/Axios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Axios />
    <Fecth />
  </StrictMode>,
)
