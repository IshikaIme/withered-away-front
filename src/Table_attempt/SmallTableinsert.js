import React, { Component } from "react";

class SmallTableInsert extends Component {
  constructor() {
    super();
    //this.state = {};
    this.formSubmit = this.formSubmit.bind(this);
    //this.onInputChange = this.onInputChange.bind(this);
  }

  // onInputChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const id = form.elements["id"].value;
    const Name = form.elements["Name"].value;
    const gender = form.elements["gender"].value;
    const birthday = form.elements["birthday"].value;
    const emergency_contact_no = form.elements["emergency_contact_no"].value;

    this.props.addPerson(id, Name, gender, birthday, emergency_contact_no);
    form.reset();
  }

  render() {
    return (
      <div>
        <h2>Add a Contact</h2>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name="id"
            required="required"
            placeholder="Enter people Id..."
            // onChange={this.onInputChange}
          />
          <input
            type="text"
            id="Name"
            required="required"
            placeholder="Enter a name..."
            // onChange={this.onInputChange}
          />
          <input
            type="text"
            id="gender"
            required="required"
            placeholder="Enter Gender..."
            // onChange={this.onInputChange}
          />
          <input
            type="text"
            id="birthday"
            required="required"
            placeholder="Enter date of birth..."
            // onChange={this.onInputChange}
          />
          <input
            type="text"
            id="emergency_contact_no"
            required="required"
            placeholder="Enter an emergency contact no..."
            //  onChange={this.onInputChange}
          />
          <button type="submit">submit</button>v
        </form>
      </div>
    );
  }
}
export default SmallTableInsert;
