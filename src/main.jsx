import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./queries.css";

import "./i18n.js";
import i18n from "./i18n.js";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import { DirectionProvider } from "./context/DirectionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DirectionProvider>
      <Suspense fallback={<p>Loading</p>}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Suspense>
    </DirectionProvider>
  </React.StrictMode>
);
