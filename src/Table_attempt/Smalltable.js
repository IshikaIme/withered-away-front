import React from "react";
import SmallTableInsert from "./SmallTableinsert";
import FormDemo from "./FormDemo";
import axios from "axios";

export class Smalltable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: "",
      // Name: "",
      items: [],
    };
    this.addPerson = this.addPerson.bind(this);
    // this.AddElementsOnSubmit = this.AddElementsOnSubmit.bind(this);
  }
  addPerson(id, Name, gender, birthday, emergency_contact_no) {
    this.setState((prevState) => ({
      items: [
        ...prevState.item,
        { id, Name, gender, birthday, emergency_contact_no },
      ],
    }));
  }
  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetch("http://localhost:8080/api/people")
      .then((response) => response.json())
      .then((response) => this.setState({ items: response.data }))
      .catch((error) => console.log(error));
  }
  //   componentDidMount() {
  //     fetch("http://localhost:8080/api/people")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result.data);
  //         this.setState({
  //           items: result.data,
  //         });
  //       });
  //   }

  // submitform(values) {
  //   this.setState({ values });
  // }
  // console.log(this.state);
  // axios
  //   .post("http://localhost:8080/api/people", this.state)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // AddElementsOnSubmit(values) {
  //   var newid = values.id;
  //   var newName = values.Name;

  //   var elements = this.state.items.slice();
  //   elements.push({ id: newid, name: newName });
  //   this.setState({ items: elements, id: "", Name: "" });
  // }

  render() {
    //const { values } = this.state;
    return (
      <div>
        {/* <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Ime</td>
            </tr>
            <tr>
              <td>5</td>
              <td>JK</td>
            </tr>
          </tbody>
        </table> */}
        <SmallTableInsert addPerson={this.addPerson} />
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
            {this.state.items.map((item) => {
              return (
                <tr>
                  <th>{item.ID}</th>
                  <td>{item.NAME}</td>
                  <td>{item.GENDER}</td>
                  <td>{item.BIRTHDAY} </td>
                  <td>{item.EMERGENCY_CONTACT_NO}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h2>Passing function to the child component</h2>

        {/* <SmallTableInsert onFormSubmit={this.submitform} /> */}
        {/* <div>
          Submitted form values : <br /> */}
        {/* Id: {values && values.id} <br /> */}
        {/* Name: {values && values.Name} <br />
          Gender: {values && values.gender} <br />
          birthday: {values && values.birthday} <br />
          emergency_contact_no: {values && values.emergency_contact_no} <br /> */}
      </div>

      // </div>
    );
  }
}
