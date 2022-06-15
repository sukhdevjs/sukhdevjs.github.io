import React from 'react'
import "./topbar.scss"
import { Mail, Person } from "@material-ui/icons";

const  Topbar = ({ menuopen , setmenuopen }) => {
  return (
    <div className={'topbar ' + ( menuopen && "active")}>
      <div className="wrapper">
<div className="left">
  <a href="#work" className='logo'>Sukhdevs.</a>
  <div className="itemcontainer">
  <Person className='icon'/>
  <span>+977 9804564641</span>
  </div>
  <div className="itemcontainer">
  <Mail className='icon'/>
  <span>devil51sukhdev@gmail.com</span>
  </div>
</div>
<div className="right">
 <div className="hamburger" onClick={()=>setmenuopen(!menuopen)}>
   <span className='line1'></span>
   <span className='line2'></span>
   <span className='line3'></span>
 </div>
</div>
      </div>
    </div>
  )
}

export default  Topbar