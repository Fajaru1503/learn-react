import React from "react";
import Student from "./Student/Student";

const students = props =>
  props.students.map((student, index) => {
    return (
      <Student
        name={student.name}
        age={student.age}
        key={student.id}
        setNames={event => props.changeName(event, student.id)}
        deleteData={props.deleteItem.bind(index)}
      />
    );
  });

export default students;
