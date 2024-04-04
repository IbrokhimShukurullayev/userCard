import React from 'react'
import "./header.scss"

import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.png"
import foot from "../../assets/images/foot.png"

function Header() {
  return (
    <header className='header'>
      <nav className="container nav">
        <div className="nav__logo">
          <img src={logo} alt="" />
          <img src={foot} alt="" />
        </div>
        <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Desitnations</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Hotels</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Flights</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Bookings</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Flights</a></li>
            <li className="nav__item"><Link to="/admin" className="nav__link">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header