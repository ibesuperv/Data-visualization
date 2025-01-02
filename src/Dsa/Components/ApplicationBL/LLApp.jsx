import { Link } from "react-router-dom";

function LLApp() {
    return ( <>
                    <div className="Dsa-div">
                                <div className="grid-3">
                                   <Link to='/learning/appication/LL/music'> <div  className="child1">
                                        <h3 style={{color:'black'}}>Music</h3>
                                    </div>
                                    </Link>
                                    <Link to='/learning/appication/LL/text-editer'>
                                    <div  className="child2">
                                        <h3 style={{color:'black'}}>Text-Editer</h3>
                                    </div>
                                    </Link>
                                </div>
                            </div>
    
    </> );
}

export default LLApp;