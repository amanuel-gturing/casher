import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StitchDesign } from "./screens/StitchDesign";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StitchDesign />
  </StrictMode>,
);
