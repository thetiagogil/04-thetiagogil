import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./router/router.jsx"
import { BrowserRouter } from "react-router-dom";
import { theme } from "./components/theme/theme.js";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);
