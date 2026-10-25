import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const FSAD = React.lazy(() => import("fsad/Syllabus"));
const ApiProducts = React.lazy(() => import("apiProducts/Syllabus"));

function App() {
  return (
    <div>
      <h1>Microfrontend Shell</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <FSAD />
        <ApiProducts />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);