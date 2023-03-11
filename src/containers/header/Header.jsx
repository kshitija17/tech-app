import React from 'react'

import people from '../../assets/people.png';
import laptop from '../../assets/laptop.png';

import './header.css'

const Header = () => {
  return (
    <div className="lenovo__header section__padding" id="home">
    <div className="lenovo__header-content">
      <h1 className="gradient__text">Yoga Book 9i</h1>
      <h3 className="gradient__text">The world’s first full-sized dual-screen OLED laptop</h3>
      <p>Yoga Book 9i writes a new chapter on what a multimode+ laptop can be. Combine
         two stunning PureSight OLED displays for a single cascade screen, or work with 
         both screens running different programs simultaneously. Experience incredible 
         productivity with the Intel® Evo™ platform.</p>

      <div className="lenovo__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="lenovo__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="lenovo__header-image">
      <img src={laptop} />
    </div>
  </div>
  )
}

export default Header