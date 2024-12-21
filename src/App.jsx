import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Dsa from "./Dsa/Dsa";
import Stack from "./components/Stack/Stack";
import Queue from "./components/Queue/Queue";
import LinearSearch from "./components/linear-search/LinearSearch";
import OsScheduling from "./components/OS/OsScheduling";
import BinarySearch from "./components/binarySearch/BinarySeaarch";
import Ai from "./components/Ai";
import Contact from "./components/Contact";
import HourglassLoader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some setup
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <HourglassLoader />; // Show loader while loading
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dsa/stack" element={<Stack />} />
        <Route path="/dsa/queue" element={<Queue />} />
        <Route path="/dsa/linear-search" element={<LinearSearch />} />
        <Route path="/dsa/binary-search" element={<BinarySearch />} />
        <Route path="/dsa/Os-Scheduling" element={<OsScheduling />} />
      </Routes>
    </>
  );
}

export default App;
