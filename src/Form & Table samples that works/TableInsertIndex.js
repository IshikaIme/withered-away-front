import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableInsertForm from "./TableInsertForm";
import { useCallback } from "react";

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
    this.setState((prevState) => ({
      people: [
        ...prevState.people,
        { ID, NAME, GENDER, BIRTHDAY, EMERGENCY_CONTACT_NO },
      ],
    }));
    console.log(this.state.people.length);
    // axios
    //   .post(
    //     "http://localhost:8080/api/people",
    //     this.state.people[this.state.people.length - 1]
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // <Observer value={this.props.position} didUpdate={this.moveMap} />;
  }

  // componentDidMount() {
  //   fetch("http://localhost:8080/api/people")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result.data);
  //       this.setState({
  //         people: result.data,
  //       });
  //     });
  // }
  componentDidMount() {
    this.getPeople();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (
      this.props.userID !== prevProps.userID
      // this.isdeleting.value != true
    ) {
      this.fetchData(this.props);
    }

    this.insertPeople();
  }
  getPeople() {
    fetch("http://localhost:8080/api/people")
      .then((response) => response.json())
      .then((response) => this.setState({ people: response.data }))
      .catch((error) => console.log(error));
  }
  insertPeople() {
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
  }

  deletePerson(ID) {
    return () => {
      // this.isdeleting.value = true;
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
          // this.alert("Deleted successfully");
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
            {this.state.people.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.NAME}</td>
                  <td>{item.GENDER}</td>
                  <td>{item.BIRTHDAY} </td>
                  <td>{item.EMERGENCY_CONTACT_NO}</td>
                  <td>
                    <button onClick={this.deletePerson(item.ID)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h1>Add a member:</h1>
        <TableInsertForm addPerson={this.addPerson} />
      </div>
    );
  }
}
export default TableInsertIndex;
