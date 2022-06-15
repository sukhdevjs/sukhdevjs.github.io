import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu"; 

function App() {
  const [menuopen , setmenuopen] = useState(false)
  return (
    <div className="app">
      <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
