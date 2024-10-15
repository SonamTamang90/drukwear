import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import RootLayout from "./RootLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </StrictMode>
);
