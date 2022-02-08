import React, { useState } from "react";
import "../Tables/table.css";
import data from "./sampledata.json";
import { nanoid } from "nanoid";

function Tablegg(props) {
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
    clearState();
  };

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
      <form>
        <input
          type="text"
          name="id"
          value={id}
          required="required"
          placeholder="Enter people Id..."
          onChange={changeId}
        />

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

        <button type="submit" onClick={transferValue}>
          Add
        </button>
      </form>
    </div>
  );
}

//   return (
//     <div className="app-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Birthday</th>
//             <th>Emergency contact number</th>
//           </tr>
//         </thead>

//         <tbody>
//           {contacts.map((contact) => (
//             <tr>
//               <td>{contact.ID}</td>
//               <td>{contact.NAME}</td>
//               <td>{contact.GENDER}</td>
//               <td>{contact.BIRTHDAY}</td>
//               <td>{contact.EMERGENCY_CONTACT_NO}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }

export default Tablegg;
