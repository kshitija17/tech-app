import React from 'react'
import processor from '../../assets/Processor.png';
import './Processor.css'

const Possibility = () => {
  return (
    <div className="lenovo__possibility section__padding" id="processor">
    <div className="lenovo__possibility-image">
      <img src={processor} alt="possibility" />
    </div>
    <div className="lenovo__possibility-content">
      <h4>Open a new book of limitless possibilities!</h4>
      <h1 className="gradient__text">Powered by Intel Core® X-Series</h1>
      <p>Create all day and game all night with up to Intel Core® graphics.
         Select models are Intel Core® Studio certified with next-gen performance that lets you 
         render faster, broadcast clearer, and edit video better</p>
      <h4>Lenovo's brand-new X Power takes your passion to the next level</h4>
    </div>
  </div>
  )
}

export default Possibility