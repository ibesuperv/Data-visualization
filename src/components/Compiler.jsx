// Compiler.jsx
import React, { useEffect } from 'react';

const Compiler = ({ embedUrl }) => {
  useEffect(() => {
    // Dynamically load the JDoodle script
    const script = document.createElement('script');
    script.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div  style={{backgroundColor:'white',margin:'0'}}>
    <h1 className='c-text' style={{textAlign:'center', fontSize:'80px', color:'gray', textDecoration:'underline'}}>C- COMPILER</h1>
    <div className='compiler' style={{padding:'20px'}}>
      {/* JDoodle Embed */}
      <div data-pym-src={embedUrl}></div>
    </div>
    </div>
  );
};

export default Compiler;
