/* eslint-disable react/prop-types */
function Filter(props) {
  return (
    <div className="container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={props.onFilterChange} />
      <label htmlFor="department">Department:</label>
      <select id="department" onChange={props.onFilterChange}>
        <option></option>
        <option>It</option>
        <option>Marketing</option>
      </select>
      <input type="search" className="search" placeholder="Search..."></input>
    </div>
  );
}

export default Filter;
