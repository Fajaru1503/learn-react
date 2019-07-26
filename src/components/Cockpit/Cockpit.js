import React from "react";
import cockpitClasses from "./Cockpit.css";

const cockpit = props => {
  let showClass = cockpitClasses.ShowButton;

  if (props.status) {
    showClass = cockpitClasses.CloseButton;
  }

  const classes = [];
  if (props.students.length < 2) {
    classes.push(cockpitClasses.red); // classes = ['red']
  }
  if (props.students.length < 1) {
    classes.push(cockpitClasses.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={cockpitClasses.Cockpit}>
      <h1>Hi, Let's Make React App</h1>
      <p className={classes.join(" ")}>This is Working!</p>
      <button
        className={cockpitClasses.Button}
        onClick={props.switchSpirit.bind(this, "YOU KNOW YOU CAN DO IT")}
      >
        Hype Yourself
      </button>
      <button className={showClass} onClick={props.showData}>
        {props.datas ? "Close Data" : "Show Data"}
      </button>
      <h2>{props.spirit}</h2>
    </div>
  );
};

export default cockpit;
