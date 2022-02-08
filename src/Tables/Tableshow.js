import React from "react";
import reactDom from "react-dom";
import { useState } from "react";

export class Tableshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
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
      </div>
    );
  }
}
