import React from "react";

const ReadOnlyRows = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{item.ID}</td>
      <td>{item.NAME}</td>
      <td>{item.GENDER}</td>
      <td>{item.BIRTHDAY.substring(0, 10)}</td>
      <td>{item.EMERGENCY_CONTACT_NO}</td>
      <td>
        {/* <button
          onClick={() => {
            captureEdit(customer);
            changeEditState(customer);
          }}
        > */}
        <button type="button" onClick={(event) => handleEditClick(event, item)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(item.ID)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ReadOnlyRows;
