import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseProvider } from "../context/firebase.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseProvider>
  </StrictMode>
);
