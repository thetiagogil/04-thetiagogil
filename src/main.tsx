import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { LanguageProvider } from "./contexts/language.context";
import { ThemeContextProvider } from "./contexts/theme.context";
import "./styles/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeContextProvider>
  </StrictMode>
);
