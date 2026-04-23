import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { I18nProvider } from "./i18n/index.jsx";
import "./styles/globals.css";

if (window.location.hash.startsWith("#/")) {
  const legacyPath = window.location.hash.slice(1);
  const basePath = window.location.pathname.replace(/\/$/, "");
  const nextPath = `${basePath}${legacyPath}` || "/";
  window.history.replaceState(null, "", `${nextPath}${window.location.search}`);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </React.StrictMode>
);
