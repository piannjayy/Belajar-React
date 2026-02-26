import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Hubungi from './pages/Hubungi'
import Navbar from './components/Navbar'
import Detail from './pages/Detail'
import Error from './pages/Error'
import Resto from './pages/Resto'
import Cari from './pages/Cari'

function App() {

  const location = useLocation();

  console.log(location);

  return (
    <>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tentang' element={<Tentang />} />
      <Route path='/hubungi' element={<Hubungi />} />
      <Route path='/resto' element={<Resto />} />
      <Route path='/resto/:id' element={<Detail />} />
      <Route path='/cari-resto' element={<Cari />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </>
  )
}

export default App
