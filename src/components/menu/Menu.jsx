import React from 'react';
import "./menu.scss";

const Menu = ({ menuopen , setmenuopen }) => {
  return (
    <div className={'menu '+(menuopen && "active")}>
        <ul>
            <li onClick={()=>setmenuopen(false)}><a href="#intro">Home</a></li>
            <li onClick={()=>setmenuopen(false)}><a href='#portfolio'>Portfolio</a></li>
            <li onClick={()=>setmenuopen(false)}><a href='#work'>Works</a></li>
            <li onClick={()=>setmenuopen(false)}><a href='#testimonials'>Testimonials</a></li>
            <li onClick={()=>setmenuopen(false)}><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Menu