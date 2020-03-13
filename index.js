import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { UserProvider } from "./context";
import "./App.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  rootElement
);
