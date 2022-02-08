import React from "react";
import ReactDOM from "react-dom";
import { LoginNavigation } from "./login/LoginNavigation";
import { App } from "./App";

import "./Tables/table.css";
//ReactDOM.render(<Login />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
