import React, { Component } from "react";
import axios from "axios";

class TableInsertForm extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  // onInputChange(event) {
  //   this.props.setState({
  //     [event.target.id]: event.target.value,
  //   });
  //   console.log(this.state);
  // }

  formSubmit(event) {
    event.preventDefault();

    const form = event.target;

    // axios
    //   .post("http://localhost:8080/api/people", form.elements)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const ID = form.elements["ID"].value;
    const NAME = form.elements["NAME"].value;
    const GENDER = form.elements["GENDER"].value;
    const BIRTHDAY = form.elements["BIRTHDAY"].value;
    const EMERGENCY_CONTACT_NO = form.elements["EMERGENCY_CONTACT_NO"].value;

    // axios
    //   .post("http://localhost:8080/api/people", form.elements)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    this.props.addPerson(ID, NAME, GENDER, BIRTHDAY, EMERGENCY_CONTACT_NO);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          id="ID"
          type="text"
          defaultValue=""
          required="required"
          placeholder="ID..."
          //  onChange={this.onInputChange}
        />
        <input
          id="NAME"
          type="text"
          defaultValue=""
          required="required"
          placeholder="Name..."
          // onChange={this.onInputChange}
        />
        <input
          id="GENDER"
          type="text"
          defaultValue=""
          required="required"
          placeholder="Gender..."
          // onChange={this.onInputChange}
        />
        <input
          id="BIRTHDAY"
          type="text"
          required="required"
          defaultValue=""
          placeholder="Birthday..."
          // onChange={this.onInputChange}
        />
        <input
          id="EMERGENCY_CONTACT_NO"
          type="text"
          required="required"
          defaultValue=""
          placeholder="Emergency_contact_no..."
          // onChange={this.onInputChange}
        />

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TableInsertForm;
