import React from "react";
import ReactDOM from "react-dom";
import loginimg from "../images/old.gif";

//import "./style.scss";

export class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <form action="https://www.youtube.com" method="GET">
          <div className="Header col-md-4">LOGIN AS ADMIN</div>
          <div className="Content col-md-4">
            <div className="Image">{/* <img src={loginimg} /> */}</div>
            <div className="Form col-md-4">
              <div className="Form-group">
                <label htmlFor="username">Username </label>
                <input type="text" name="username" placeholder="username" />
              </div>

              <div className="Form-group">
                <label htmlFor="password">Password </label>
                <input type="text" name="password" placeholder="password" />
              </div>
            </div>
          </div>

          <div className="footer col-md-4">
            <button type="button " className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
