import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import HomeAni from "./Animation/HomeAni";
import { Formsidebar } from "./Registration/Form-sidebar";

import TableBody from "./Tables/TableBody";
export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HomeAni />

        {/* <FormdemoApp /> */}
      </div>
    );
  }
}
