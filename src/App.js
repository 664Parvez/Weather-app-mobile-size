import React from "react";
import Weather from "./Components/Weather";
import Intro from "./Components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
