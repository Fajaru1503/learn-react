import React, { Component } from "react";
import appClasses from "./App.css";
import Students from "../components/Students/Students";
import Cockpit from "../components/Cockpit/Cockpit";

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

    if (this.state.status) {
      datas = (
        <div>
          <Students
            students={this.state.students}
            deleteItem={this.deleteDataHandler}
            changeName={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={appClasses.App}>
        <Cockpit
          students={this.state.students}
          spirit={this.state.spirit}
          showData={this.showDataHandler}
          switchSpirit={this.switchSpiritHandler}
          data={datas}
        />
        {datas}
      </div>
    );
  }
}

export default App;
