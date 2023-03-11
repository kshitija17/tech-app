import React from 'react'
import Feature from '../../components/feature/Feature';
import './feature.css'

const featuresData = [
  {
    title: 'Vision comes to life with PureSight 4K OLED',
    text: 'Upgrade your window to the world with an up to 4K OLED PureSight display. More pixels, more detail, and a higher refresh rate make for a silky smooth, touch capable, display that maintains the purest image fidelity for spectacular creative or entertainment experiences.',
  },
  {
    title: 'Discover X Power',
    text: 'Lenovo brand-new X Power takes your passion to the next level with fine-tuned high-performance hardware, turbo matrix for CPU/GPU dynamic power control, cutting-edge software scenario tuning and leading thermal design power',
  },
  {
    title: 'NVIDIA® RTX™ dedicated graphics',
    text: 'Create all day and game all night with up to NVIDIA® GeForce RTX™ dedicated graphics. Select models are NVIDIA® Studio certified with next-gen performance that lets you render faster, broadcast clearer, and edit video better.',
  },
  {
    title: 'Inspiring audio',
    text: 'Be inspired by audio the way it was meant to be heard with Sound by Bowers & Wilkins with Dolby Atmos®. Sophisticated acoustic tuning and optimization gives greater accuracy and realism to every part of the audio experience.',
  },
];

const Features = () => {
  return (
    <div className="lenovo__features section__padding" id="features">
    <div className="lenovo__features-heading">
      <h1 className="gradient__text">The world’s first full-sized dual-screen OLED laptop</h1>
      <p>Open a new book of limitless possibilities!</p>
    </div>
    <div className="lenovo__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features