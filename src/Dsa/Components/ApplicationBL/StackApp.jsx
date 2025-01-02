import { Link } from "react-router-dom";

function StackApp() {
    return ( 

        <>
                <div className="Dsa-div">
                            <div className="grid-3">
                               <Link to='/learning/appication/stack/TOH'> <div  className="child1">
                                    <h3 style={{color:'black'}}>TOH</h3>
                                </div>
                                </Link>
                                <Link to='/learning/appication/stack/maze'>
                                <div  className="child2">
                                    <h3 style={{color:'black'}}>Maze</h3>
                                </div>
                                </Link>
                            </div>
                        </div>
        </>
     );
}

export default StackApp;