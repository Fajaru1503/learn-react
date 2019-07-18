import React from 'react';

const student = (props) => {
  return (
    <div>
      <h2>This is The React App That {props.name} Made, and He's {props.age} years old</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default student;