import React, { useState } from 'react'
import "./work.scss"
import { ArrowBackIosRounded } from "@material-ui/icons"
import { ArrowForwardIosRounded } from "@material-ui/icons"

const Work = () => {

const [currentslide,setCurrentslide] = useState(0);

const data = [
  {
    id: "1",
    icon: "./assets/smartfone.png",
    title: "Web Design",
    desc: "Website development with best UI/UX.",
    img: "https://freepngimg.com/thumb/web_design/14-2-web-design-png.png",
  },
  {
    id: "2",
    icon: "./assets/gicon.png",
    title: "Graphic Design",
    desc: "Man Graphic Designer Vector  Transparent Cartoon",
    img: "https://www.jing.fm/clipimg/full/403-4034285_man-graphic-designer-vector-png.png",
  },
  {
    id: "3",
    icon: "./assets/writing.png",
    title: "Branding",
    desc: "Responsive Web Design Digital Marketing Web Development Web Page",
    img: "https://img.favpng.com/9/25/17/responsive-web-design-digital-marketing-web-development-web-page-png-favpng-LukhXtyigaCPieCiEz6gv43Nv.jpg"
  },
];

const handleClick = (way) => {
  way === 'left'
  ? setCurrentslide(currentslide > 0 ? currentslide -1 : 2)
  : setCurrentslide(currentslide < data.length -1 ? currentslide +1 : 0);
}

  return (
    <div className='work' id='work'>
      <div className="slider" 
      style={{ transform: `translateX(-${currentslide * 100}vw)`}}
      >
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <ArrowBackIosRounded className='arrow left' onClick={()=>handleClick("left")}/>
      <ArrowForwardIosRounded className='arrow right' onClick={()=>handleClick()}/>
    </div>
  )
}

export default Work