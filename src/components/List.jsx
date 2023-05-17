/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function List(props) {
  return (
    <ul>
      {props.people.map((person) => (
        <li key={person.id}>
          <span className="spanName">{person.name}</span>
          <span className="spanDep">
            ({person.department === 1 ? "It" : "Marketing"})
          </span>
          <span className="spanSelect">
            {" "}
            <select
              onChange={(event) => {
                switch (event.target.value) {
                  case "edit":
                    props.onEditPerson(person);
                    break;
                  case "delete":
                    props.onDeletePerson(person);
                    break;
                  default:
                    break;
                }
              }}
            >
              <option value="">Select action</option>
              <option value="edit">Edit</option>
              <option value="delete">Delete</option>
            </select>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
