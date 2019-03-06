import React from "react";

const Select = ({beat, handleChange}) => (
  <select name="select" onChange={handleChange}>
    <option value="2" disabled={beat === "2"}>2/4</option>
    <option value="3" disabled={beat === "3"}>3/4</option>
    <option value="4" disabled={beat === "4"}>4/4</option>
  </select>
);

export default Select;
