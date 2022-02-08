import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { LoginNavigation } from "./login/LoginNavigation";

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Homepage">
        <LoginNavigation />;
        <ul>
          <a href="/LoginAdmin">
            <li>Login as Admin</li>
          </a>
          <a href="/LoginMember">
            <li>Login as Member</li>
          </a>
          <a href="/LoginDoctor">
            <li>Login as Doctor</li>
          </a>
          <a href="/LoginStaff">
            <li>Login as Staff</li>
          </a>
        </ul>
      </div>
    );
  }
}
