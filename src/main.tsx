import { App } from "@/app";
import { LanguageContextProvider } from "@/providers/language/language-provider";
import { ThemeContextProvider } from "@/providers/theme/theme-provider";
import "@/styles/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

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
