import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1> 
        <p>React, here I come!</p>
        <Person name="Bob" age="28"/>
        <Person name="Cat" age="29">My Hobbies: Racing</Person>
        <Person name="Sally" age="20"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
