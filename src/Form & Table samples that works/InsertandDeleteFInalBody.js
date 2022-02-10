import React, { useEffect, useState } from "react";
import TableForm from "../Tables/TableForm";
import axios from "axios";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

const TableBody = () => {
  const [result, setData] = useState(null);
  //const fetchURL = "https://jsonplaceholder.typicode.com";
  const getData = () =>
    fetch("http://localhost:8080/api/people").then((res) => res.json());

  useEffect(() => {
    getData().then((d) => setData(d.data));
    console.log(result);
  }, []);

  const addRows = (newdata) => {
    const totalPeople = result.length;
    newdata.id = totalPeople + 1;
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

  const removeData = (id) => {
    let url = `http://localhost:8080/api/people/${id}`;

    axios.delete(url).then((res) => {
      const filtered = result.filter((row) => id !== row.id);
      setData(filtered);
      window.location.reload(false);
      console.log("res", res);
    });
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
          {result?.map((info) => (
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
          ))}
        </tbody>
      </table>

      <TableForm func={addRows} />
    </div>
  );
};

export default TableBody;
// onClick={deletePerson(info.ID)}
