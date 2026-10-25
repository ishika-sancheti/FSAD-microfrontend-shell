import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return <h1>Microfrontend Shell</h1>;
}

createRoot(document.getElementById("root")).render(<App />);