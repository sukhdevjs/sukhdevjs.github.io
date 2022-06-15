import React from 'react'
import "./testimonials.scss"

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
      <div className="card">
        <div className="top">
          <img className='left' src="assets/rightarrow.png"  alt=""/>
          <img className='user' src="https://www.pngitem.com/pimgs/m/182-1822816_developer-clipart-hd-png-download.png"  alt=""/>
          <img className='right'  src="assets/yt.png" alt=""/>
        </div>
        
<div className="center">
          Hey , How are you doing .
        </div>
        <div className="bottom">
          <h3>Sukhdev Thakur</h3>
          <h4>Developer</h4>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials