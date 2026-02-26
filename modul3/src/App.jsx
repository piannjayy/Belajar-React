// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List/List'
import Detail from './pages/Detail/Detail'
import Search from './pages/Search/Search'

function App() {
  const location = useLocation();

  console.log(location)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:slug" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}



export default App
