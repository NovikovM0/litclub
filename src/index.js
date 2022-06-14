import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";
import { UserAuthContextProvider } from "./context/UserAuth";
import './components/Auth/firebase';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
    <GlobalProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GlobalProvider>
    </UserAuthContextProvider>
  </React.StrictMode>
);