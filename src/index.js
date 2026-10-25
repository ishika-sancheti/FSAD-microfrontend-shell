import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ("./bootstrap");

function App() {
  return <h1>Microfrontend Shell</h1>;
}

createRoot(document.getElementById("root")).render(<App />);