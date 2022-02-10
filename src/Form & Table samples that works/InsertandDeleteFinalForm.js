import React, { useState } from "react";
import "../Tables/table.css";

import { nanoid } from "nanoid";

function TableForm(props) {
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emergency_contact_no, setEmergency_contact_no] = useState("");

  const changeId = (event) => {
    setId(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changeBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const changeEmergency_contact_no = (event) => {
    setEmergency_contact_no(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const newContact = {
      id,
      Name,
      gender,
      birthday,
      emergency_contact_no,
    };

    props.func(newContact);
    console.log(newContact);
    clearState();
  };
  function refreshPage() {
    window.location.reload(false);
  }

  const clearState = () => {
    setId("");
    setName("");
    setGender("");
    setBirthday("");
    setEmergency_contact_no("");
  };

  return (
    <div>
      <h2>Add a Contact</h2>
      <form onSubmit={transferValue}>
        {/* <input
          type="text"
          name="id"
          value={id}
          required="required"
          placeholder="Enter people Id..."
          onChange={changeId}
        /> */}

        <input
          type="text"
          name="Name"
          value={Name}
          required="required"
          placeholder="Enter a name..."
          onChange={changeName}
        />
        <input
          type="text"
          name="gender"
          value={gender}
          required="required"
          placeholder="Enter Gender..."
          onChange={changeGender}
        />
        <input
          type="text"
          name="birthday"
          value={birthday}
          required="required"
          placeholder="Enter date of birth..."
          onChange={changeBirthday}
        />
        <input
          type="text"
          name="emergency_contact_no"
          required="required"
          value={emergency_contact_no}
          placeholder="Enter an emergency contact no..."
          onChange={changeEmergency_contact_no}
        />

        <button type="submit" onClick={refreshPage}>
          Add
          {/* <a href="/PeopleTable"> Add </a> */}
        </button>
      </form>
    </div>
  );
}

// onClick={refreshPage}

export default TableForm;
