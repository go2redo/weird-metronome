import React from "react";

const Button = ({ run, handleRun }) => (
  <button onClick={handleRun}>{run ? "Stop" : "Start"}</button>
);

export default Button;
