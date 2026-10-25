import React from "react";
import { createRoot } from "react-dom/client";

function FSAD() {
  return (
    <main>
      <h1>FSAD Syllabus</h1>
      <p>Full Stack Application Development</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<FSAD />);