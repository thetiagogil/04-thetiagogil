import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { LanguageContextProvider } from "./contexts/language.context";
import { ThemeContextProvider } from "./contexts/theme.context";
import "./styles/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
