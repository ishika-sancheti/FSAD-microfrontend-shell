import React from "react";
import { createRoot } from "react-dom/client";
import ("./bootstrap");

function FSAD() {
  return (
    <main>
      <h1>API Products Syllabus</h1>
      <p>API Products</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<FSAD />);