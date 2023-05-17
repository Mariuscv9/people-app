/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import List from "./components/List";
import Popup from "./components/Popup";

function App() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const proxyUrl = "https://corsproxy.io/?";
    const targetUrl = "https://webackit.com/wp-content/uploads/people.json";

    fetch(proxyUrl + targetUrl)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      });
  }, []);

  const departmentType = people.map(({ department }) => department);
  console.log(departmentType);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = people.filter(
      (person) =>
        person.name.toLowerCase().includes(value) ||
        person.department.toString().includes(value)
    );
    setFilteredPeople(filtered);
  };

  const handleAddPerson = () => {
    setSelectedPerson(null);
    setPopupType("add");
    setShowPopup(true);
  };

  const handleEditPerson = (person) => {
    setSelectedPerson(person);
    setPopupType("edit");
    setShowPopup(true);
  };

  const handleDeletePerson = (person) => {
    const newPeople = people.filter((p) => p !== person);
    setPeople(newPeople);
    setFilteredPeople(newPeople);
  };

  return (
    <>
      <Filter onFilterChange={handleFilterChange} deparment={departmentType} />
      <List
        people={filteredPeople}
        onEditPerson={handleEditPerson}
        onDeletePerson={handleDeletePerson}
      />
      <button className="popbtn" onClick={handleAddPerson}>
        Add person
      </button>
      {showPopup && (
        <Popup
          type={popupType}
          person={selectedPerson}
          onClose={() => setShowPopup(false)}
          onSave={(newPerson) => {
            if (popupType === "add") {
              setPeople([...people, newPerson]);
              setFilteredPeople([...filteredPeople, newPerson]);
            } else if (popupType === "edit") {
              const newPeople = people.map((p) =>
                p === selectedPerson ? newPerson : p
              );
              setPeople(newPeople);
              setFilteredPeople(newPeople);
            }
            setShowPopup(false);
          }}
        />
      )}
    </>
  );
}

export default App;
