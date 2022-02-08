import React, { useState } from "react";
import Tablegg from "./Tablegg";
import sampledata from "./sampledata.json";

function TableData() {
  //const items= this.props;
  const [PeopleData, setPeopleData] = useState(sampledata);

  const tableRows = PeopleData.map((info) => {
    return (
      <tr>
        <td>{info.ID}</td>
        <td>{info.NAME}</td>
        <td>{info.GENDER}</td>
        <td>{info.BIRTHDAY}</td>
        <td>{info.EMERGENCY_CONTACT_NO}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalPeople = PeopleData.length;
    data.id = totalPeople + 1;
    const updatedPeopleData = [...PeopleData];
    updatedPeopleData.push(data);
    setPeopleData(updatedPeopleData);
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
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <Tablegg func={addRows} />
    </div>
  );
}

export default TableData;
