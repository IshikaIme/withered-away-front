import React from "react";
import reactDom from "react-dom";
import { useState } from "react";
import axios from "axios";
export class Peopletable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // currentItem: {
      //   id: " ",
      //   Name: " ",
      //   gender: " ",
      //   birthday: " ",
      //   emergency_contact_no: " ",
      // },
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    //this.handleAddFormSubmit = this.handleAddFormSubmit.bind(this);
    // this.handleAddFormChange = this.handleAddFormChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/people")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        this.setState({
          items: result.data,
        });
      });
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
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

    this.componentDidMount();
  };

  render() {
    return (
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Emergency contact number</th>
            </tr>
          </thead>

          <tbody>
            {this.state.items.map((item) => (
              <tr>
                <td>{item.ID}</td>
                <td>{item.NAME}</td>
                <td>{item.GENDER}</td>
                <td>{item.BIRTHDAY} </td>
                <td>{item.EMERGENCY_CONTACT_NO}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add a Contact</h2>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="id"
            required="required"
            placeholder="Enter people Id..."
            onChange={this.handleInput}
          />

          <input
            type="text"
            name="Name"
            required="required"
            placeholder="Enter a name..."
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="gender"
            required="required"
            placeholder="Enter Gender..."
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="birthday"
            required="required"
            placeholder="Enter date of birth..."
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="emergency_contact_no"
            required="required"
            placeholder="Enter an emergency contact no..."
            onChange={this.handleInput}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
