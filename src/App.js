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
    students: [
      { name: "Fajaru", age: 20, id: 1 },
      { name: "Fajar", age: 25, id: 2 }
    ],
    spirit: "KEEP THE SPIRIT DUDE",
    status: false
  };

  deleteDataHandler = studentIndex => {
    // const students = this.state.students.slice(); COPYING THE WHOLE DATA BEFORE CHANGE IT
    const students = [...this.state.students];
    students.splice(studentIndex, 1);
    this.setState({ students: students });
  };

  nameChangeHandler = (event, index) => {
    const studentIndex = this.state.students.findIndex(s => {
      return s.id === index;
    });

    const student = {
      ...this.state.students[studentIndex]
    };

    student.name = event.target.value;

    const students = [...this.state.students];
    students[studentIndex] = student;

    this.setState({ students: students });
  };

  switchSpiritHandler = newMessage => {
    this.setState({
      spirit: newMessage
    });
  };

  showDataHandler = () => {
    const doesShow = this.state.status;
    this.setState({ status: !doesShow });
  };

  render() {
    const style = {
      showButton: {
        backgroundColor: "green",
        border: "1px solid #d9d9d9",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
        display: "block",
        margin: "10px auto",
        padding: "10px",
        transition: "all 0.3s ease-in-out"
      },
      spiritButton: {
        backgroundColor: "white",
        border: "1px solid #d9d9d9",
        borderRadius: "10px",
        cursor: "pointer",
        display: "block",
        margin: "10px auto",
        padding: "10px"
      }
    };

    let datas = null;

    if (this.state.status) {
      datas = (
        <div>
          {this.state.students.map((student, index) => (
            <Students
              name={student.name}
              age={student.age}
              key={student.id}
              setNames={event => this.nameChangeHandler(event, student.id)}
              deleteData={this.deleteDataHandler.bind(this, index)}
            />
          ))}
        </div>
      );
      style.showButton.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.students.length < 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.students.length < 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, Let's Make React App</h1>
        <p className={classes.join(" ")}>This is Working!</p>
        {/* <button onClick={() => switchHandler("YOU KNOW YOU CAN DO IT")}>Switch Names</button> NOT RECOMENDED */}
        <button
          className="spiritButton"
          style={style.spiritButton}
          onClick={this.switchSpiritHandler.bind(
            this,
            "YOU KNOW YOU CAN DO IT"
          )}
        >
          Hype Yourself
        </button>
        <button style={style.showButton} onClick={this.showDataHandler}>
          {datas ? "Close Data" : "Show Data"}
        </button>
        {datas}
        <h2>{this.state.spirit}</h2>
      </div>
    );
  }
}

export default App;
