import React, { Component } from "react";

export class SmallTableInsert extends Component {
  constructor() {
    super();
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitForm() {
    this.props.onFormSubmit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Add a Contact</h2>
        <form>
          {/* <input
            type="text"
            name="id"
            required="required"
            placeholder="Enter people Id..."
            onChange={this.onInputChange}
          /> */}

          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter a name..."
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="gender"
            required="required"
            placeholder="Enter Gender..."
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="birthday"
            required="required"
            placeholder="Enter date of birth..."
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name="emergency_contact_no"
            required="required"
            placeholder="Enter an emergency contact no..."
            onChange={this.onInputChange}
          />

          <button onClick={this.onSubmitForm}>Add</button>
        </form>
      </div>
    );
  }
}
export default SmallTableInsert;
