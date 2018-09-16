import React, { Component } from 'react';
import styles from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      persons: [
        {id: 1, name: 'Ramadan', age: '28'},
        {id: 2, name: 'Aya', age: '23', hobby: 'chess'},
        {id: 3, name: 'Nelly', age: '28'},
      ],
      otherState: 'some other value',
      showPersons: false
    };
  };
  
  
  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  };
  
  deletePersonHandler = (personId) => {
    const persons = [...this.state.persons];
    this.setState({
      persons: persons.filter((person) => person.id !== personId)
    });
  };
  
  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    
    const person = persons.find((p) => p.id === personId);
    if (person)
      person.name = event.target.value;
    this.setState({persons: persons});
  };
  
  render() {
    
    let persons = null;
    if (this.state.showPersons){
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }
    
    return (
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
