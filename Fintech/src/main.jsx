import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Ensure global styles are imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="scroll-container">
      <App />
    </div>
  </React.StrictMode>
);
