import React, { Component } from 'react';
import './App.css';
import Students from './Students/Students';

class App extends Component {
  state = {
    name: [
      { name: "Fajaru", age: 20 },
      { name: "Fajar", age: 25 }
    ],
    spirit: "KEEP THE SPIRIT UP DUDE, YOU CAN DO IT"
  }

  switchNameHandler = () => {
    // alert("HEHE");
    // this.state.name[0].name = "NEW FAJARU"; DON'T DO THIS STUPID SYNTAX
    this.setState({
      name: [
        { name: "Bhirawa", age: 30 },
        { name: "Dewangga", age: 35 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Let's Make React App</h1>
        <p>This is Working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        {this.state.name.map((e) =>
          <Students name={e.name} age={e.age}/>
        )}
        <h2>{this.state.spirit}</h2>
      </div>
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Let\'s Make React App'));
    );
  }
}

export default App;
