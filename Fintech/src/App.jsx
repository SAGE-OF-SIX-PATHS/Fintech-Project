import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Collaborations from "./Components/Collaborations";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Section1 />
      <Collaborations />
    </div>
  );
}

export default App