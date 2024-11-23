import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function DataSection() {

    const handleLearnMore=()=>{
        const element = document.querySelector(".display-section");
        window.scrollTo(
            {
                top:element?.getBoundingClientRect().bottom,
                left:0,
                behavior:'smooth'
            }
        )
    }
    return ( 
        <div className="Data-section wrapper">
            <div className="body">
                <div className="Data-section-content content">
            <h2 className="title">  See the Data structure </h2>
            <p className="text">

            <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Learn and Enjoy..',
    1000,
    'Learn',
    1000,
    'Feel the DSA',
    1000,
    'Feel ',
    1000,
  ]}
  speed={50}
  repeat={Infinity}
/>

            </p>
            <span className="description">Data structures are fundamental to computer science and software engineering, 
                as they provide a means to manage large amounts of data efficiently.
                </span>
            <ul className="links">
                <li><button className="button">Visualize</button></li>
                <li><a className="link" onClick={handleLearnMore}>Next</a></li>
            </ul>
                </div>
            </div>
        </div>
    );
}

export default DataSection;