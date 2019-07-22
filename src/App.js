import React, { useState, Component } from "react";
import "./App.css";
import Students from "./Students/Students";

// function base
// const App = props => {
//   const [studentsState, setStudentsState] = useState({
//     name: [{ name: "Fajaru", age: 20 }, { name: "Fajar", age: 25 }]
//   });

//   const [spiritState, setSpiritState] = useState("KEEP THE SPIRIT UP DUDE");

//   console.log(studentsState);

//   const switchNameHandler = newNames => {
//     // this.state.name[0].name = "NEW FAJARU"; DON'T DO THIS STUPID SYNTAX
//     setStudentsState({
//       name: [{ name: "Bhirawa", age: 30 }, { name: "Dewangga", age: 35 }]
//     });
//   };

//   const changNamesHandler = e => {
//     setStudentsState({
//       name: [{ name: e.target.value, age: 20 }, { name: "Fajar", age: 25 }]
//     });
//   };

//   const switchSpiritHandler = newMessage => {
//     setSpiritState(newMessage);
//   };

//   const switchHandler = newMessage => {
//     switchNameHandler();
//     switchSpiritHandler(newMessage);
//   };

//   return (
//     <div className="App">
//       <h1>Hi, Let's Make React App</h1>
//       <p>This is Working!</p>
//       {/* <button onClick={() => switchHandler("YOU KNOW YOU CAN DO IT")}>Switch Names</button> NOT RECOMENDED */}
//       <button onClick={switchHandler.bind(this, "YOU KNOW YOU CAN DO IT")}>
//         Switch Names
//       </button>
//       {studentsState.name.map(e => (
//         <Students name={e.name} age={e.age} setNames={changNamesHandler} />
//       ))}
//       <h2>{spiritState}</h2>
//     </div>
//   );
//   // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Let\'s Make React App'));
// };

// class based
class App extends Component {
  state = {
    students: [{ name: "Fajaru", age: 20 }, { name: "Fajar", age: 25 }],
    spirit: "KEEP THE SPIRIT DUDE"
  };

  switchNameHandler = newName => {
    this.setState({
      students: [{ name: newName, age: 20 }, { name: "Fajar", age: 25 }]
    });
  };

  nameChangeHandler = e => {
    this.setState({
      students: [{ name: e.target.value, age: 20 }, { name: "Fajar", age: 25 }]
    });
  };

  switchSpiritHandler = newMessage => {
    this.setState({
      spirit: newMessage
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid #d9d9d9",
      borderRadius: "10px",
      cursor: "pointer",
      padding: "10px"
    };

    return (
      <div className="App">
        <h1>Hi, Let's Make React App</h1>
        <p>This is Working!</p>
        {/* <button onClick={() => switchHandler("YOU KNOW YOU CAN DO IT")}>Switch Names</button> NOT RECOMENDED */}
        <button
          style={style}
          onClick={this.switchSpiritHandler.bind(
            this,
            "YOU KNOW YOU CAN DO IT"
          )}
        >
          Switch Names
        </button>
        {this.state.students.map(e => (
          <Students
            name={e.name}
            age={e.age}
            setNames={this.nameChangeHandler}
          />
        ))}
        <h2>{this.state.spirit}</h2>
      </div>
    );
  }
}

export default App;
