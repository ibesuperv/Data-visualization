import { useNavigate } from "react-router-dom";

function Quiz() {
    const navigate = useNavigate();  // Hook to navigate programmatically
    
        const handleNavigation = (path) => {
            navigate(path);  // Navigate to the provided path
        };
    return ( 
        <>
                <div className="Dsa-div">
            <div className="grid-3">
                <div onClick={() => handleNavigation('/quiz/stack')} className="child1">
                    <h3 style={{color:'black'}}>Stack</h3>
                </div>
                <div onClick={() => handleNavigation('/quiz/queue')} className="child2">
                    <h3 style={{color:'black'}}>Queue</h3>
                </div>
                <div onClick={() => handleNavigation('/quiz/trees')} className="child6">
                    <h3 style={{color:'black'}}>Trees</h3>
                </div>
                
            </div>
        </div>
        
        </>
     );
}

export default Quiz;