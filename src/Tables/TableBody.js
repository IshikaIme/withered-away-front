import React, { useEffect, useState, Fragment } from "react";
import TableForm from "../Tables/TableForm";
import axios from "axios";
import ReadOnlyRows from "./ReadOnlyRows";
import EditableRows from "./EditableRows";

const TableBody = () => {
  const [result, setData] = useState(null);
  const [editFormData, setEditFormData] = useState({
    // id: "",
    NAME: "",
    GENDER: "",
    BIRTHDAY: "",
    EMERGENCY_CONTACT_NO: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const getData = () =>
    fetch("http://localhost:8080/api/people").then((res) => res.json());

  useEffect(() => {
    getData().then((d) => setData(d.data));
    console.log(result);
  }, []);

  const addRows = (newdata) => {
    const totalPeople = result.length;
    newdata.ID = totalPeople + 1;
    const updatedPeopleData = [...result];
    updatedPeopleData.push(newdata);
    setData(updatedPeopleData);
    axios
      .post(
        "http://localhost:8080/api/people",

        //updatedPeopleData[updatedPeopleData.length - 1]
        newdata
      )
      .then((response) => {
        // alertService.success("User added",);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.getData();
  };

  // const handleDeleteClick = (id) => {
  //   let url = `http://localhost:8080/api/people/${id}`;

  //   axios.delete(url).then((res) => {
  //     const filtered = result.filter((row) => id !== row.id);
  //     setData(filtered);
  //     window.location.reload(false);
  //     console.log("res", res);
  //   });
  // };

  const handleDeleteClick = (contactId) => {
    const newresult = [...result];
    let url = `http://localhost:8080/api/people/${contactId}`;

    axios.delete(url).then((res) => {
      const index = result.findIndex((contact) => contact.ID === contactId);

      newresult.splice(index, 1);

      setData(newresult);

      window.location.reload(false);
      //     console.log("res", res);
    });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event, itemID) => {
    event.preventDefault();
    const editedContact = {
      // ID: editContactId,
      NAME: editFormData.NAME,
      GENDER: editFormData.GENDER,
      BIRTHDAY: editFormData.BIRTHDAY,
      EMERGENCY_CONTACT_NO: editFormData.EMERGENCY_CONTACT_NO,
    };
    const newChangedResult = [...result];
    const index = result.findIndex((contact) => contact.ID === editContactId);
    newChangedResult[index] = editedContact;

    axios
      .patch(`http://localhost:8080/api/people/id/${index}`, editedContact)
      .then((res) => {
        setEditFormData(newChangedResult);

        window.location.reload(false);
        setEditContactId(null);
      });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.ID);

    const formValues = {
      NAME: contact.NAME,
      GENDER: contact.GENDER,
      BIRTHDAY: contact.BIRTHDAY,
      EMERGENCY_CONTACT_NO: contact.EMERGENCY_CONTACT_NO,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>People Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Emergency contact number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* /* {result?.map((info) => (
            <tr>
              <td>{info.ID}</td>
              <td>{info.NAME}</td>
              <td>{info.GENDER}</td>
              <td>{info.BIRTHDAY}</td>
              <td>{info.EMERGENCY_CONTACT_NO}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => removeData(info.ID)}>Delete</button>
              </td>
            </tr>
          ))} */}

          {result?.map((item) => (
            <Fragment>
              {editContactId === item.ID ? (
                <EditableRows
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                  handleEditFormSubmit={handleEditFormSubmit}
                />
              ) : (
                <ReadOnlyRows
                  item={item}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <TableForm func={addRows} />
    </div>
  );
};

export default TableBody;
// onClick={deletePerson(info.ID)}
{
  /* <TableData
key={item.ID}
item={item}
/> */
}
