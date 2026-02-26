import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import TranslateContext from './context/TranslateContext'
import TemaContext from './context/TemaContext'
import RegionContext from './context/RegionContext'
import Kontak from './pages/Kontak/Kontak'
import { Provider } from 'react-redux'
import store from './store'
import Aksata from './pages/Aksata/Aksata'

function App() {
  const [isIndonesia, setIsIndonesia] = useState(false);
  const [isTema, setIsTema] = useState("terang");
  const [isRegion, setIsRegion] = useState("Indonesia");
  // const [count, setCount] = useState(0)

  return (
    <>
  <Provider store={store}>
    <RegionContext value={{ isRegion, setIsRegion }}>
    <TemaContext.Provider value={{ isTema, setIsTema }}>
    <TranslateContext.Provider value={{ isIndonesia, setIsIndonesia }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Kontak/>} />
        <Route path="/aksata" element={<Aksata/>} />
      </Routes>
      </TranslateContext.Provider>
      </TemaContext.Provider>
      </RegionContext>
      </Provider>
    </>
  )
}

export default App
