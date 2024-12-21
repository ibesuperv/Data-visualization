import { useNavigate } from 'react-router-dom';
import './dsa.css';
import Nav from '../components/Nav';

function Dsa() {
    const navigate = useNavigate();  // Hook to navigate programmatically

    const handleNavigation = (path) => {
        navigate(path);  // Navigate to the provided path
    };

    return (
        <>
        <Nav/>
        <div className="Dsa-div">
            <div className="grid-3">
                <div onClick={() => handleNavigation('/dsa/stack')} className="child1">
                    <h3 style={{color:'black'}}>Stack</h3>
                </div>
                <div onClick={() => handleNavigation('/dsa/queue')} className="child2">
                    <h3 style={{color:'black'}}>Queue</h3>
                </div>
                <div onClick={() => handleNavigation('/dsa/linear-search')} className="child3">
                    <h3 style={{color:'black'}}>Linear Search</h3>
                </div>
                <div onClick={() => handleNavigation('/dsa/binary-search')} className="child4">
                    <h3 style={{color:'black'}}>Binary Search</h3>
                </div>
                <div onClick={() => handleNavigation('/dsa/Os-Scheduling')} className="child5">
                    <h3 style={{color:'black'}}>OS Scheduling</h3>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dsa;
