import React, { Component } from "react";
import axios from "axios";
class TableInsertForm extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const ID = form.elements["ID"].value;
    const NAME = form.elements["NAME"].value;
    const GENDER = form.elements["GENDER"].value;
    const BIRTHDAY = form.elements["BIRTHDAY"].value;
    const EMERGENCY_CONTACT_NO = form.elements["EMERGENCY_CONTACT_NO"].value;
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
        />
        <input
          id="NAME"
          type="text"
          defaultValue=""
          required="required"
          placeholder="Name..."
        />
        <input
          id="GENDER"
          type="text"
          defaultValue=""
          required="required"
          placeholder="Gender..."
        />
        <input
          id="BIRTHDAY"
          type="text"
          required="required"
          defaultValue=""
          placeholder="Birthday..."
        />
        <input
          id="EMERGENCY_CONTACT_NO"
          type="text"
          required="required"
          defaultValue=""
          placeholder="Emergency_contact_no..."
        />

        <button type="submit" onClick={this.submitHandler}>
          Add
        </button>
      </form>
    );
  }
}

export default TableInsertForm;
