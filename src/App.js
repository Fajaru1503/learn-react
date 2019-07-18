import React from 'react';
import './App.css';
import Students from './Students/Students';

function App() {
  return (
    <div className="App">
      <h1>Hi, Let's Make React App</h1>
      <p>This is Working!</p>
      <Students name="Fajaru" age="20"/>
      <Students name="Fajar" age="25">This is additional field</Students>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Let\'s Make React App'));
}

export default App;
