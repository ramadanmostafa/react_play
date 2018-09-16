import React, { Component } from 'react';
import styles from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
import withClass from "../hoc/withClass";
import Aux from '../hoc/Aux';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      persons: [
        {id: 1, name: 'Ramadan', age: 28},
        {id: 2, name: 'Aya', age: 23, hobby: 'chess'},
        {id: 3, name: 'Nelly', age: 28},
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  };
  
  
  togglePersonsHandler = () => {
    // to prevent a race condition
    this.setState((pervState, props) => {
      return {showPersons: !pervState.showPersons, toggleClicked: pervState.toggleClicked + 1};
    });
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
      <Aux>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
