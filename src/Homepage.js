import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { LoginNavigation } from "./login/LoginNavigation";
import JoinImg from "./images/0.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
export class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="Homepage">
      //   <LoginNavigation />;
      //   <ul>
      //     <a href="/LoginAdmin">
      //       <li>Login as Admin</li>
      //     </a>
      //     <a href="/LoginMember">
      //       <li>Login as Member</li>
      //     </a>
      //     <a href="/LoginDoctor">
      //       <li>Login as Doctor</li>
      //     </a>
      //     <a href="/LoginStaff">
      //       <li>Login as Staff</li>
      //     </a>
      //   </ul>
      // </div>

      <div>
        <Router>
          <Link to="/img"></Link>

          <Routes>
            <Route exact path="/img" element={<JoinImg />}></Route>
          </Routes>
        </Router>

        <div>
          <Card>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              // image={cardnumber.imageUrl}
              // image={`url(${cardnumber.imageUrl})`}
              image="/img"
              title="Registration"
            />
          </Card>
        </div>
      </div>
    );
  }
}
