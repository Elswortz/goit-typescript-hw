import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormComponent } from "./components/FormComponent";
import { Observer } from "./components/Observer";
import { RequestComponent } from "./components/RequestComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormComponent />
    <Observer onContentEndVisible={() => {}}>
      <div>Test</div>
    </Observer>
    <RequestComponent />
  </StrictMode>,
);
