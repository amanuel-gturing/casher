import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StitchDesign } from "./screens/StitchDesign";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StitchDesign />
  </StrictMode>,
);

