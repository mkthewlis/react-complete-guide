import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Max', age: 28 },
      { id: 'audgj1', name: 'Manu', age: 29 },
      { id: 'jfgh1', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  // No longer used, but kept for reference
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };

  // This handler changes the name to whatever is typed into the input with the 'event' and 'target', based on item id
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { // Uses findIndex() method to check if specific person is the correct one
      return p.id === id; // If the current id matches the id of the event, this is true
    });

    // Get person by the personIndex created above by creating a new object and the spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    // can also use this instead, although its less conventional:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // Update the persons name based on the copy created above, using the value of the input
    person.name = event.target.value;

    // Update the array by getting the persons first (with spread operator), then targeting the individual person through the personIndex
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Set state the the updated persons array copied above
    this.setState({ persons: persons });
  }

  // 'persons' are taken from the state, one element is removed (spliced) from 
  // the array and set the word persons to the new persons here
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // Slice is used here to create a copy of the original array so it isn't removed completely
    // Alternatively: const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  // Toggles whether div with names should be included
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) { 
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} // Checks the index of the array to see if it matches current person 
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} /> // ID is used here to target specific element, getting it to reflect what is written in the input (passed to Person component)
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>Let's try this out!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
};

export default App;