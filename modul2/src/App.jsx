import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List';
import Detail from './pages/Detail';
import Cari from './pages/Cari';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';

function App() {

  const location = useLocation();

  console.log(location);


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/list/:id' element={<Detail />} />
        <Route path='/cari-produk' element={<Cari />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
