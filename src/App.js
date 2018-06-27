import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Bumbi', age: 37},
      {name: 'Kukukpig', age: 35},
      {name: 'Melissa', age: 33}
    ],
    otherState: 'some other setting'
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    //DONT DO THIS this.state.persons[1]='Maxamillion'
    this.setState( {
      persons: [
      {name: 'Dell', age: 35},
      {name: newName, age: 39},
      {name: 'Mel', age: 21}
      ]
    } )
  }


  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
      {name: 'Dell', age: 35},
      {name: event.target.value, age: 39},
      {name: 'Mel', age: 25}
      ]
    } )
  }
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, im am a react app</h1>
        <p>this is working again</p>
        <h1>YOU CAN DO THIS!!!!</h1>
        <button
         style = {style}
         onClick={() => this.switchNameHandler('Dellrodar')}>Switch Name</button>
        <Person
           name={this.state.persons[0].name}
           age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Melissa!')}
          changed = {this.nameChangedHandler} > Hobbies: Diamonds </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
