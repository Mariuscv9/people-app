import React, { useState } from "react";

function Popup(props) {
  const [name, setName] = useState(props.person ? props.person.name : "");
  const [department, setDepartment] = useState(
    props.person ? props.person.department : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSave({ name, department });
  };

  return (
    <div>
      <form className="popUpForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="">Select department</option>
            <option value="1">IT</option>
            <option value="2">Marketing</option>
          </select>
        </div>
        <button type="submit">{props.type === "add" ? "Save" : "Edit"}</button>
        <button className="x" type="button" onClick={props.onClose}>
          X
        </button>
      </form>
    </div>
  );
}

export default Popup;
