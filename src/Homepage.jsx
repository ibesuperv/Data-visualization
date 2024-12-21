import { Route, Routes } from "react-router-dom";
import DisplaySection from "./components/Home/DisplaySection";
import Jumbotron from "./components/Home/Jumbotron";
import SoundSection from "./components/Home/SoundSection";
import WebgiViewer from "./components/Home/WebgiViewer";
import Nav from "./components/Nav";
import AnimatedCursor from 'react-animated-cursor';


function Homepage() {
  return ( <>
  
  <div className="App cursor-default">
  <AnimatedCursor
        color="255, 255, 255"
        innerSize={40}
        outerSize={15}
        innerScale={1}
        outerScale={0.5}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
        innerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
      <Nav/>
      <WebgiViewer/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>

    </div>
  </> );
}

export default Homepage;