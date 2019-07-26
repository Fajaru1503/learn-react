import React, { Component } from "react";
import appClasses from "./App.css";
import Student from "../components/Students/Student/Student";

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
    let datas = null;
    let showClass = appClasses.ShowButton;

    if (this.state.status) {
      datas = (
        <div>
          {this.state.students.map((student, index) => (
            <Student
              name={student.name}
              age={student.age}
              key={student.id}
              setNames={event => this.nameChangeHandler(event, student.id)}
              deleteData={this.deleteDataHandler.bind(this, index)}
            />
          ))}
        </div>
      );

      showClass = appClasses.CloseButton;
    }

    const classes = [];
    if (this.state.students.length < 2) {
      classes.push(appClasses.red); // classes = ['red']
    }
    if (this.state.students.length < 1) {
      classes.push(appClasses.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={appClasses.App}>
        <h1>Hi, Let's Make React App</h1>
        <p className={classes.join(" ")}>This is Working!</p>
        {/* <button onClick={() => switchHandler("YOU KNOW YOU CAN DO IT")}>Switch Names</button> NOT RECOMENDED */}
        <button
          className={appClasses.Button}
          onClick={this.switchSpiritHandler.bind(
            this,
            "YOU KNOW YOU CAN DO IT"
          )}
        >
          Hype Yourself
        </button>
        <button className={showClass} onClick={this.showDataHandler}>
          {datas ? "Close Data" : "Show Data"}
        </button>
        {datas}
        <h2>{this.state.spirit}</h2>
      </div>
    );
  }
}

export default App;
