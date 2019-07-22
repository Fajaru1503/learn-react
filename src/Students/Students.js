import React from "react";
import "./Students.css";

const student = props => {
  return (
    <div className="Students">
      <p>
        This is The React App That {props.name} Made, and He's {props.age} years
        old
      </p>
      <p>{props.children}</p>
      <input
        style={{ textAlign: "center" }}
        type="text"
        onChange={props.setNames}
        value={props.name}
      />
    </div>
  );
};

export default student;
