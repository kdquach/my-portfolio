import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "./components/ui/provider";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
