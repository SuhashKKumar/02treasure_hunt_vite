import "./App.css";
import WrongEntry from "./components/WrongEntry";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import CorrectPath from "./components/CorrectPath";
import { useState } from "react";
function App() {
  
  const [pathName, setPathName]= useState('')
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage setPathName={setPathName} />} />
        <Route exact path="/here" element={<CorrectPath />} />
        <Route exact path={pathName} element={<WrongEntry pathName={pathName} />} />
        
      </Routes>
    </div>
  );
}

export default App;
