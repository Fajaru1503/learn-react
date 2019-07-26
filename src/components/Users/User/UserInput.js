import React from "react";

const userInput = props => {
  const Style = {
    border: "1px solid #cacaca",
    borderRadius: "10px",
    outline: "none",
    padding: "10px",
    textAlign: "center"
  };

  return (
    <div>
      <input
        style={Style}
        type="text"
        onChange={props.setUsername}
        value={props.name}
      />
    </div>
  );
};

export default userInput;
