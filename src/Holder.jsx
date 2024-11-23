import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import WebgiViewer from './components/WebgiViewer';
import Landing from './components/Landing';
import DataSection from './components/Data';
import DisplaySection from './components/DisplaySection';


function Holder() {
    return ( 

<>
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
    {/* <Nav/> */}
    <WebgiViewer/>
    <Landing/>
   <DataSection />
    <DisplaySection/>
</>
     );
}

export default Holder;