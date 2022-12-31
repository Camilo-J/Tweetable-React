import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";

import App from "./App";
import { global, reset } from "./styles";
import { AuthProvider } from "./context/auth-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
