import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import HomeAni from "./HomePageAnimation/HomeAni";
import { Formsidebar } from "./Registration/Form-sidebar";
import { Homepage } from "./Homepage";
import TableBody from "./Tables/TableBody";
import Formcall from "./RegistraionAnimation/Formcall";
import "./RegistraionAnimation/forms.css";
import CostTable from "./RegistraionAnimation/CostTable";
export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* <CostTable /> */}
        <Formcall />
        {/* <HomeAni /> */}
        {/* <FormdemoApp /> */}
      </div>
    );
  }
}
