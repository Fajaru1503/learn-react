import React from "react";
import Radium from "radium";
import "./Students.css";

const student = props => {
  const media = {
    "@media only screen and (min-width: 1200px)": {
      color: "red"
    }
  };

  return (
    <div className="Students">
      <p onClick={props.deleteData} style={media}>
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

export default Radium(student);
