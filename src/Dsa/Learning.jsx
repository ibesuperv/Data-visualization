import { Link, useNavigate } from "react-router-dom";

function Learning() {

    const navigate = useNavigate();  // Hook to navigate programmatically

    const handleNavigation = (path) => {
        navigate(path);  // Navigate to the provided path
    };
    return ( <div className="bg-[#f4f4f4] text-center cursor-default  h-screen w-screen">
<div className="Dsa-div">
            <div className="grid-3">
               <Link to='/learning/appication'> <div  className="child1">
                    <h3 style={{color:'black'}}>Application based Learning</h3>
                </div>
                </Link>
                <div onClick={() => handleNavigation('/practice')} className="child2">
                    <h3 style={{color:'black'}}>Practice Based Learning</h3>
                </div>
                <div onClick={() => handleNavigation('/quiz')} className="child3">
                    <h3 style={{color:'black'}}>Quiz based Learning</h3>
                </div>
                <div onClick={() => handleNavigation('/article')} className="child4">
                    <h3 style={{color:'black'}}>Arcticle based learning</h3>
                </div>

            </div>
        </div>
    </div> );
}

export default Learning;
