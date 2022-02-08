import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { LoginAdmin } from "./loginadmin";
import { LoginDoctor } from "./logindoctor";
import { LoginPeople } from "./loginpeople";
import { LoginStaff } from "./loginstaff";

export class LoginNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="loginnav">
        <Router>
          <Link to="/LoginAdmin"></Link>

          <Link to="/LoginMember"></Link>

          <Link to="/LoginDoctor"></Link>

          <Link to="/LoginStaff"></Link>

          <Routes>
            {/* <Route exact path="/" element={<Homepage />}></Route> */}
            <Route exact path="/LoginAdmin" element={<LoginAdmin />}></Route>
            <Route exact path="/LoginMember" element={<LoginPeople />}></Route>
            <Route exact path="/LoginDoctor" element={<LoginDoctor />}></Route>
            <Route exact path="/LoginStaff" element={<LoginStaff />}></Route>
          </Routes>
        </Router>
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
