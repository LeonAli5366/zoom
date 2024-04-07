/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SocketContext from "./Contextapi/SocketContext.jsx";
import UserContext from "./Contextapi/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <BrowserRouter>
    
      <SocketContext>
        <UserContext>
          <App />
        </UserContext>
      </SocketContext>
  </BrowserRouter>
);
