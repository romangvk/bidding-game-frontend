import React from "react";
import { createRoot } from "react-dom/client";
import { worker } from "./mocks/browser";
import "./styles/index.css";
import App from "./views/App/App";

if (process.env.REACT_APP_MOCKS === "true") {
  worker.start();
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
