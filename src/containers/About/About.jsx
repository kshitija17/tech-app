import React from 'react'
import Feature from '../../components/feature/Feature';
import './About.css'

const Whatlenovo = () => {
  return (
    <div className="lenovo__whatlenovo section__margin" id="aboutyoga">
    <div className="lenovo__whatlenovo-feature">
      <Feature title="Yoga Book 9i" text="You’re not one thing. You’re a master of blending, 
      an eclectic mixer, a craftsy curator. That’s why we designed the Lenovo YOGA to boost all
       your ambitions. Giving you the power and mobility to just be you.The power to unlock your
        potential and make your ideas a reality. Move forward with Yoga Slim." />
    </div>
    <div className="lenovo__whatlenovo-heading">
      <h1 className="gradient__text">Move forward with Yoga Slim</h1>
      <p>Explore the Library</p>
    </div>
    <div className="lenovo__whatlenovo-container">
      <Feature title="Premium Experiences" text="You’re not one thing. You’re a master of blending, an eclectic mixer, a craftsy curator. That’s why we designed the Lenovo YOGA to boost all your ambitions." />
      <Feature title="Refined Craftsmanship" text="You’re not one thing. You’re a master of blending, an eclectic mixer, a craftsy curator. That’s why we designed the Lenovo YOGA to boost all your ambitions." />
      <Feature title="Bold Innovation" text="You’re not one thing. You’re a master of blending, an eclectic mixer, a craftsy curator. That’s why we designed the Lenovo YOGA to boost all your ambitions." />
    </div>
  </div>
  )
}

export default Whatlenovo