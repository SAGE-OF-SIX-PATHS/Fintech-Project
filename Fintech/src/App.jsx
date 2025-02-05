import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
// import Prog from "./Components/Checkbox";
// import Hero from "./components/Hero";
// import Partners from "./components/Partners";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Section1 />
      {/* < Prog /> */}
    </div>
  );
}

export default App