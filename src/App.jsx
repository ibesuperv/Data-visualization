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
import Learning from "./Dsa/Learning";
import TOH from "./Dsa/Components/TOH";
import Nav from "./components/Nav";
import Applications from "./Dsa/Components/ApplicationBL/Applications";
import StackApp from "./Dsa/Components/ApplicationBL/StackApp";
import LLApp from "./Dsa/Components/ApplicationBL/LLApp";
import Trees from "./Dsa/Components/ApplicationBL/Trees";
import Maze from "./Dsa/Components/Maze";
import Music from "./Dsa/Components/Music";
import TextEditer from "./Dsa/Components/TextEditer";
import Familytree from "./Dsa/Components/FamilyTree";
import Quiz from "./Dsa/Components/Quiz/quiz";
import StackQuiz from "./Dsa/Components/Quiz/StackQuiz";
import QueueQuiz from "./Dsa/Components/Quiz/QueueQuiz";
import TreesQuiz from "./Dsa/Components/Quiz/TreesQuiz";
import PracticeBased from "./Dsa/Components/PracticeBased";
import ArticleBased from "./Dsa/Components/ArticleBased";

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
    <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/appication" element={<Applications />} />
        <Route path="/learning/appication/stack" element={<StackApp />} />
        <Route path="/learning/appication/LL" element={<LLApp />} />
        <Route path="/learning/appication/tree" element={<Trees />} />
        <Route path="/learning/appication/stack/TOH" element={<TOH />} />
        <Route path="/learning/appication/stack/maze" element={<Maze />} />
        <Route path="/learning/appication/LL/music" element={<Music />} />
        <Route path="/learning/appication/LL/text-editer" element={<TextEditer />} />
        <Route path="/learning/appication/tree/family-tree" element={<Familytree />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/stack" element={<StackQuiz />} />
        <Route path="/quiz/queue" element={<QueueQuiz />} />
        <Route path="/quiz/trees" element={<TreesQuiz />} />
        
        <Route path="/practice" element={<PracticeBased />} />
        <Route path="/article" element={<ArticleBased />} />
        

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
