import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

function Jumbotron() {

    const handleLearnMore=()=>{
        const element = document.querySelector(".sound-section");
        window.scrollTo(
            {
                top:element?.getBoundingClientRect().top,
                left:0,
                behavior:'smooth'
            }
        )
    }
    return ( 

        <div className="jumbotron-section wrapper" style={{marginTop:'4vh'}}>

            <h2 className="title">The</h2>
            <p className="text"><TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Data Structure.',
    1000,
    'Data Struct',
    1000,
    'Data Structure.',
    1000,
    'Data ',
    1000,
  ]}
  speed={50}
  repeat={Infinity}
/></p>
            <span className="description">
            A Data Structure is a specialized format for organizing, processing, retrieving, and storing data</span>
            <ul className="links">
                <li>
                    <Link to='/dsa'>
                    <button className="button">
                        Visualize
                    </button>
                    </Link>
                </li>
                <li>
                    <a className="link" onClick={handleLearnMore}>
                        Learn more
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Jumbotron;