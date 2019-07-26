import React from "react";

const userOutput = props => {
  return (
    <div>
      <p style={{ fontSize: "48px", fontWeight: "700" }}>
        Username: {props.name}
      </p>
      <p>Alright, try to change Username above!</p>
    </div>
  );
};

export default userOutput;
