import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navbar.css'

const Navbar = () => {
  const [toggleMenu ,  setToggleMenu] = useState(false);

  return (
    <div className='lenovo__navbar'>
      <div className='lenovo__navbar-links'>
        <div className='lenovo__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className="lenovo__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#aboutyoga">Yoga Book 9i</a></p>
          <p><a href="#processor">Powered by</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blogs</a></p>
        </div>
      </div>
      <div className="lenovo__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="lenovo__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="lenovo__navbar-menu_container scale-up-center">
          <div className="lenovo__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wlenovo">What is lenovo?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="lenovo__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>

  )
}

export default Navbar