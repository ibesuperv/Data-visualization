import React from 'react';
import { Link } from 'react-router-dom';
import './holder.css'
function Nav() {
    return (
        <nav className="nav-wrapper" style={{background:'white',position:'absolute',top:'0',left:'0',position:'fixed'}}>
            <div className="nav-content">
                <ul className="list-styled">
                  
                    <li><Link className="link-styled-li" style={{color:'black',textDecoration:'none'}} to="/" >Home</Link></li>
                    <li><Link to='/dsa' className="link-styled-li" style={{color:'black',textDecoration:'none'}}>Visualize</Link></li>
                    <li><Link to='/ai' className="link-styled-li" style={{color:'black',textDecoration:'none'}}>Ai</Link></li>
                    
                    <li><Link to='/contact' className="link-styled-li" style={{color:'black',textDecoration:'none'}}>Contact</Link></li>
                
                </ul>
            </div></nav>

    );
}

export default Nav;