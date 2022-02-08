import React, { Component } from "react";

class FormDemo extends Component {
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
        <table>
          <tr>
            <td>First Name :</td>
            <td>
              <input type="text" name="fname" onChange={this.onInputChange} />
            </td>
          </tr>
          <tr>
            <td>Last Name :</td>
            <td>
              <input type="text" name="lname" onChange={this.onInputChange} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.onSubmitForm}>Submit</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FormDemo;
