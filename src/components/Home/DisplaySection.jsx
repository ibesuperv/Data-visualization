import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


function DisplaySection() {
    return (
        <div className="display-section wrapper">
            <h2 className="title">Try and</h2>

            <p className="text"><TypeAnimation
sequence={[
// Same substring at the start will only be typed once, initially
'Practise',
1000,
'Pract',
1000,
'Practise',
1000,
'',
1000,
]}
speed={50}
repeat={Infinity}
/></p>
            <span className="description"> Visualize Stack, Queue and many more!!!</span>
            <Link to='/dsa'>
                    <button className="button">
                        Try
                    </button>
                    </Link>
        </div>

    );
}

export default DisplaySection; 