import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
        <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Web saya</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-5">
      <Link to="/">Home</Link>
        <Link to="/tentang">Tentang kami</Link>
        <Link to="/hubungi">Hubungi kami</Link> 
        <Link to="/resto">Resto</Link>
        <Link to="/detail/1">Detail 1</Link>
        <Link to="/detail/2">Detail 2</Link>
        <Link to="/mabar">Jangan klik ini</Link>
    </ul>
  </div>
</div>

        <nav style={{display: 'flex', gap: '20px', borderBottom: '1px solid black', paddingBottom: '10px', marginBottom: '20px'}}>
        
        </nav>
      </div>
  )
}

export default Navbar