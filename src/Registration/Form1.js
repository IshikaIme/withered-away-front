import React from "react";
import ReactDOM from "react-dom";

import "./form1.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Form2 } from "./Form2";
import regimg1 from "../images/sky.jpg";

export class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      birthday: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/reg/1", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { firstname, lastname, gender, birthday } = this.state;

    return (
      <div className="base-container">
        <form onSubmit={this.submitHandler}>
          <div className="Form">
            <div className="Heading">
              <h1>Registration Form</h1>
            </div>

            <div className="Secondheading">
              <h1>1. Basic Information</h1>
            </div>

            <div className="wrap1">
              <div className="Form-group1">
                <label htmlFor="firstname">First name: </label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  required="required"
                  placeholder="firstname"
                  onChange={this.changeHandler}
                />
                <span class="focus-input"></span>
              </div>

              <div className="Form-group2">
                <label htmlFor="lastname">Last name: </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  required="required"
                  placeholder="lastname"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="wrap2">
              Gender :
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                required="required"
                onChange={this.changeHandler}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                required="required"
                onChange={this.changeHandler}
              />
              <label for="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="trans"
                value="trans"
                required="required"
                onChange={this.changeHandler}
              />
              <label for="trans">Not to say</label>
            </div>
            {/* <div className="Form-group-radio">
                    <input type="radio" name="radiogroup1" id="rd1">
                     <label for="rd1">Male</label>
                        <input type="radio" name="radiogroup1" id="rd2">
                         <label for="rd2">Female</label>
                    </div> */}

            <div className="wrap2">
              <label htmlFor="birthday">Date of birth </label>
              <input
                type="date"
                name="birthday"
                value={birthday}
                placeholder="birthday"
                required="required"
                onChange={this.changeHandler}
              />
            </div>

            <div className="footer">
              <button type="submit " className="btn">
                Save
              </button>

              <button type="button" className="btn">
                <a href="/form2">Next</a>
              </button>
            </div>

            {/* <div className="image">
              <img src={regimg1} />
            </div> */}
          </div>
        </form>
      </div>
    );
  }
}
