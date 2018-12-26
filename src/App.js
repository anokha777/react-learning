import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'anokha111', age: 20},
      {name: 'anokha2', age: 21},
      {name: 'anokha3', age: 22}
    ]
  }

  switchNameHandler = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>React Learing...</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbie: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
