import React from 'react'
import Logo from '../assets/logo.png'
import '../pages/NavbarStyle.css'
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Login from './Login';
import { Link, Routes, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className='container rounded mt-3'>
      <nav className="navbar fixed-top navbar-expand-lg bg-light ">
        <div className="container d-flex justify-content-between">
          <a className="logo-title navbar-brand" href="#"><img className='logo' src={Logo} />M23</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav mx-auto mt-2 align-center">
              <li className="nav-item m-2">
              <Link className='page mt-2 mb-2' to='/'>Home</Link>
              </li>
              <li className="nav-item m-2">
              <Link className='page' to='/about'>About</Link>
              </li>
              <li className="nav-item m-2">
              <Link className='page' to='/service'>Service</Link>
              </li>
              <li className="nav-item m-2">
              <Link className='page' to='/contact'>Contact</Link>
              </li>
            </ul>
            <button className="btn btn-success mt-2"><Link className='logo-title' to="/login">Login</Link></button>
          </div>
        </div>
      </nav>
    </div>
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
    </Routes>
    </div>
  )
}

export default Navbar