import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
}) => {
  return (
    <tr>
      <td>{editFormData.ID}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="NAME"
          value={editFormData.NAME}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter gender..."
          name="GENDER"
          value={editFormData.GENDER}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter birthday..."
          name="BIRTHDAY"
          value={editFormData.BIRTHDAY}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an emergency contact no..."
          name="EMERGENCY_CONTACT_NO"
          value={editFormData.EMERGENCY_CONTACT_NO}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button
          type="submit"
          onClick={(event) => handleEditFormSubmit(event, editFormData.ID)}
        >
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
