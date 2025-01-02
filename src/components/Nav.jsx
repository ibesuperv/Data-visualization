import React from 'react';
import { Link } from 'react-router-dom';
import './holder.css'
function Nav() {
    return (
        <nav className="nav-wrapper cursor-default" style={{background:'white',position:'fixed',top:'0',left:'0'}}>
            <div className="nav-content">
                <ul className="list-styled">
                  
                    <li><Link className="link-styled-li" style={{color:'black',cursor:'default',textDecoration:'none'}} to="/" >Home</Link></li>
                    <li><Link to='/dsa' className="link-styled-li" style={{color:'black',cursor:'default',textDecoration:'none'}}>Visualize</Link></li>
                    <li><Link to='/ai' className="link-styled-li" style={{color:'black',cursor:'default',textDecoration:'none'}}>Ai</Link></li>
                    <li><Link to='/learning' className="link-styled-li" style={{color:'black',cursor:'default',textDecoration:'none'}}>Platfrom based learning</Link></li>
                
                    <li><Link to='/contact' className="link-styled-li" style={{color:'black',cursor:'default',textDecoration:'none'}}>Contact</Link></li>
                
                </ul>
            </div></nav>

    );
}

export default Nav;
