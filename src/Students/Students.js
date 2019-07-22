import React from "react";

const student = props => {
  return (
    <div>
      <p>
        This is The React App That {props.name} Made, and He's {props.age} years
        old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default student;
