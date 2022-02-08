import React from "react";
import ReactDOM from "react-dom";

//import "./Form.scss";
import "./form1.css";
import axios from "axios";

export class Form2 extends React.Component {
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
          <div className="Header">2. Contact Information</div>

          <div className="Content">
            <div className="Form">
              <div className="Form-group">
                <label htmlFor="contactname">Contact name: </label>
                <input
                  type="text"
                  name="contactname"
                  placeholder="contactname"
                  required="required"
                  onChange={this.changeHandler}
                />
              </div>

              <div className="Form-group">
                <label htmlFor="phoneno">Phone No: </label>
                <input
                  type="number"
                  name="phone no"
                  required="required"
                  placeholder="phoneno"
                  onChange={this.changeHandler}
                />
              </div>

              <div className="Form-group">
                <label htmlFor="relationship">Relationship </label>
                <input
                  type="text"
                  name="relationship"
                  required="required"
                  placeholder="relationship"
                  onChange={this.changeHandler}
                />
              </div>

              <div className="Form-group">
                <label htmlFor="address">Address </label>
                <input
                  type="text"
                  name="address"
                  required="required"
                  placeholder="address"
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
              <a href="/form3">Next</a>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
