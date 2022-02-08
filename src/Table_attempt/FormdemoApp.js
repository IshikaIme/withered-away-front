import React, { Component } from "react";
import { render } from "react-dom";
import FormDemo from "./FormDemo";

export class FormdemoApp extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({ values });
  }

  render() {
    const { values } = this.state;

    return (
      <div>
        <h2>Passing function to the child component</h2>
        <hr />
        <FormDemo onFormSubmit={this.submitForm} /> <hr />
        <div>
          Submitted form values : <br />
          First name: {values && values.fname} <br />
          Last name: {values && values.lname}
        </div>
      </div>
    );
  }
}
