import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableInsertForm from "./TableInsertForm";
import axios from "axios";
class TableInsertIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(ID, NAME, GENDER, BIRTHDAY, EMERGENCY_CONTACT_NO) {
    this.setState((prevState, sendPost) => ({
      people: [
        ...prevState.people,
        { ID, NAME, GENDER, BIRTHDAY, EMERGENCY_CONTACT_NO },
      ],
    }));
    console.log(this.state.people);
  }
  sendPost = () => {
    axios
      .post(
        "http://localhost:8080/api/people",
        this.state.people[this.state.people.length - 1]
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/people")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        this.setState({
          people: result.data,
        });
      });
  }

  //   handleClick = userId => {
  //     const requestOptions = {
  //       method: 'DELETE'
  //     };

  //     // Note: I'm using arrow functions inside the `.fetch()` method.
  //     // This makes it so you don't have to bind component functions like `setState`
  //     // to the component.
  //     fetch("/api/users/delete/" + userId, requestOptions).then((response) => {
  //       return response.json();
  //     }).then((result) => {
  //       // do what you want with the response here
  //     });
  //   }

  deletePerson(ID) {
    return () => {
      this.setState((prevState) => ({
        people: prevState.people.filter((person) => person.ID !== ID),
      }));

      const requestOptions = {
        method: "DELETE",
      };

      fetch("http://localhost:8080/api/people/" + ID, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.alert("Deleted successfully");
        });
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Emergency contact number</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.people.map((item) => (
              <tr>
                <td>{item.ID}</td>
                <td>{item.NAME}</td>
                <td>{item.GENDER}</td>
                <td>{item.BIRTHDAY} </td>
                <td>{item.EMERGENCY_CONTACT_NO}</td>
                <td>
                  <button onClick={this.deletePerson(item.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Add a member:</h1>
        <TableInsertForm addPerson={this.addPerson} />
      </div>
    );
  }
}
export default TableInsertIndex;
