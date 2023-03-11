import React from 'react'
import logo from '../../assets/logo.png';
import './footer.css'

const Footer = () => {
  return (
    <div className="lenovo__footer section__padding">
    <div className="lenovo__footer-heading">
      <h1 className="gradient__text">Move forward with Yoga Slim</h1>
    </div>

    <div className="lenovo__footer-btn">
      <p>Order Now</p>
    </div>

    <div className="lenovo__footer-links">
      <div className="lenovo__footer-links_logo">
        <img src={logo} alt="lenovo_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="lenovo__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="lenovo__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="lenovo__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="lenovo__footer-copyright">
      <p>@2023 Lenovo. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer