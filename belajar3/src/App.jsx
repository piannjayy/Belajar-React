import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Profile from './pages/Profile/Profile'
import Kontak from './pages/Kontak/Kontak'
import Semua from './pages/Semua/Semua'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/kontak' element={<Kontak />}/>
        <Route path='/semua' element={<Semua />}/>
      </Routes>
    </>
  )
}

export default App
