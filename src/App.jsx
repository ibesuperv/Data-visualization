import { Route, Routes } from "react-router-dom";
import Holder from "./Holder";
import Stack from "./components/Stack/Stack";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";
import './App.css'

function App() {

useEffect(()=>{

  const scroll  = new LocomotiveScroll();

},[])

  return (
    <div data-scroll data-scroll-container style={{backgroundColor:'transparent'}} className="App">
     
     <Routes >
      <Route path="/" element={<Holder/>}/>
      <Route path="/stack" element={<Stack/>}/>
    
     </Routes>
      </div>
  );
}

export default App;
