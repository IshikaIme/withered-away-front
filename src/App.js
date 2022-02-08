import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Homepage } from "./Homepage";
import { LoginNavigation } from "./login/LoginNavigation";
import { Formsidebar } from "./Registration/Form-sidebar";
import { Smalltable } from "./Table_attempt/Smalltable";
import { Tableshow } from "./Tables/Tableshow";
import { Peopletable } from "./Table_attempt/peopletable";
import TableData from "./Table_attempt/Tabledata";
import Functioncall from "./Table_attempt/Functioncall";
import { PassforInsert } from "./Table_attempt/PassforInsert";

import { FormdemoApp } from "./Table_attempt/FormdemoApp";
import FormDemo from "./Table_attempt/FormDemo";
import SmallTableInsert from "./Table_attempt/SmallTableinsert";
import FormIndex from "./Form samples that works/FormIndex";
import TableInsertIndex from "./Tables/TableInsertIndex";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TableInsertIndex />

        {/* <FormdemoApp /> */}
      </div>
    );
  }
}
