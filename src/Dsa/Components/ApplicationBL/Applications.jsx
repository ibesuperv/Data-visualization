import { Link } from "react-router-dom";

function Applications() {
    return ( 

        <>
        <div className="Dsa-div">
                    <div className="grid-3">
                       <Link to='/learning/appication/stack'> <div  className="child1">
                            <h3 style={{color:'black'}}>Stack</h3>
                        </div>
                        </Link>
                        <Link to='/learning/appication/LL'>
                        <div  className="child2">
                            <h3 style={{color:'black'}}>Linked List</h3>
                        </div>
                        </Link>
                        <Link to='/learning/appication/tree'>
                        <div  className="child3">
                            <h3 style={{color:'black'}}>Trees</h3>
                        </div>
                        </Link>
                    </div>
                </div>
           
        </>
     );
}

export default Applications;