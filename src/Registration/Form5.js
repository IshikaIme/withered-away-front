import React from "react";
import ReactDOM from "react-dom";

// import "./Form.scss";
import "./form1.css";
import axios from "axios";

export class Form5 extends React.Component {
  constructor(props) {
    super(props);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/reg/2", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="base-container">
        <form onSubmit={this.submitHandler}>
          <div className="Header">5. Miscellanous </div>

          <div className="Content">
            <div className="Form">
              <div className="Form-group-radio">
                <label htmlFor="mtyp"> Select your Membership type : </label>
                <input
                  type="radio"
                  name="mtyp"
                  id="basic"
                  value="basic"
                  required="required"
                  onChange={this.changeHandler}
                />
                <label for="basic">Basic</label>
                <input
                  type="radio"
                  name="mtyp"
                  id="prem"
                  value="prem"
                  required="required"
                  onChange={this.changeHandler}
                />
                <label for="prem">Premium</label>
                <input
                  type="radio"
                  name="mtyp"
                  id="gold"
                  value="gold"
                  required="required"
                  onChange={this.changeHandler}
                />
                <label for="gold">Gold</label>
              </div>

              <div className="Form-group-mis">
                <label htmlFor="account">Enter your account number: </label>
                <input
                  type="text"
                  name="account"
                  placeholder="account"
                  required="required"
                  onChange={this.changeHandler}
                />
              </div>

              <div className="Form-group-mis">
                <label htmlFor="balance">
                  How much do you want to transfer?
                </label>
                <input
                  type="text"
                  name="balace"
                  placeholder="balance"
                  required="required"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="footer">
            <button type="submit " className="save">
              Save
            </button>

            <button type="button" className="next">
              <a href="/form5">Next</a>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
