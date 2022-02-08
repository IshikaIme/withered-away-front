import React, { useState, useEffect } from "react";
import "./table.css";
import useFetch from "react-fetch-hook";
import axios from "axios";
import { nanoid } from "nanoid";
import data from "./sampledata.json";
const Tableinsert = () => {
  const [contacts, setContacts] = useState(data);
  const [AddFormData, setAddFormData] = useState({
    id: " ",
    Name: " ",
    gender: " ",
    birthday: " ",
    emergency_contact_no: " ",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...AddFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      tableid: nanoid(),
      id: AddFormData.id,
      Name: AddFormData.Name,
      gender: AddFormData.gender,
      birthday: AddFormData.birthday,
      emergency_contact_no: AddFormData.emergency_contact_no,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    console.log(this.state);
    axios
      .post("http://localhost:8080/api/people", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-container">
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="id"
          required="required"
          placeholder="Enter people Id..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="gender"
          required="required"
          placeholder="Enter Gender..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="birthday"
          required="required"
          placeholder="Enter date of birth..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="emergency_contact_no"
          required="required"
          placeholder="Enter an emergency contact no..."
          onChange={handleAddFormChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Tableinsert;
