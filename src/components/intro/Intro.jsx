import React from 'react'
import "./intro.scss"
import Typed from "react-typed"
import 'react-typed/dist/animatedCursor.css';


const Intro = () => {



  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/dp1.png" alt="" />
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
      <h2>Hi There , I'm</h2>
      <h1>Sukhdev Thakur</h1>
      <h3>
        Freelance <span>
        <Typed
      strings={[
            "Developer",
            "Designer",
            "Content Creator",
          ]}
          typeSpeed={100}
          backSpeed={60}
          backDelay={1500}
          showCursor={true}
          loop
        />
        </span>
      </h3>
      </div>
      <a href='#portfolio'>
      {/* <KeyboardArrowDown className='arrowdown'/> */}
      <img src="assets/downarrow.png" alt=""/>
      </a>
      </div>
    </div>
  )
}

export default Intro