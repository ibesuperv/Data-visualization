import React from 'react';

function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                  
                <li>
                    {/* <img src="image.png" alt="data visualization"/> */}
                    </li>
                    <li><a className="link-styled-li">Home</a></li>
                    <li><a className="link-styled-li">About-us</a></li>
                    <li><a className="link-styled-li">Visualize</a></li>
                    <li><a className="link-styled-li">Contact</a></li>
                
                </ul>
            </div></nav>

    );
}

export default Nav;