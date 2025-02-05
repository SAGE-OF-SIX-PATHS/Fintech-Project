import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Collaborations from "./Components/Collaborations";
import ExpenseTracking from "./Components/ExpenseTracking";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Section1 />
      <Collaborations />
      <ExpenseTracking />
      
    </div>
  );
}

export default App