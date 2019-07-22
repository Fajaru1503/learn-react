import React, { useState } from "react";
import "./App.css";
import Students from "./Students/Students";

const App = props => {
  const [studentsState, setStudentsState] = useState({
    name: [{ name: "Fajaru", age: 20 }, { name: "Fajar", age: 25 }]
  });

  const [spiritState, setSpiritState] = useState("KEEP THE SPIRIT UP DUDE");

  console.log(studentsState);

  const switchNameHandler = () => {
    // alert("HEHE");
    // this.state.name[0].name = "NEW FAJARU"; DON'T DO THIS STUPID SYNTAX
    setStudentsState({
      name: [{ name: "Bhirawa", age: 30 }, { name: "Dewangga", age: 35 }]
    });
  };

  const switchSpiritHandler = newMessage => {
    setSpiritState(newMessage);
  };

  const switchHandler = newMessage => {
    switchNameHandler();
    switchSpiritHandler(newMessage);
  };

  return (
    <div className="App">
      <h1>Hi, Let's Make React App</h1>
      <p>This is Working!</p>
      {/* <button onClick={() => switchHandler("YOU KNOW YOU CAN DO IT")}>
        Switch Names
      </button> */}
      <button onClick={switchHandler.bind(this, "YOU KNOW YOU CAN DO IT")}>
        Switch Names
      </button>
      {studentsState.name.map(e => (
        <Students name={e.name} age={e.age} />
      ))}
      <h2>{spiritState}</h2>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Let\'s Make React App'));
};

export default App;
