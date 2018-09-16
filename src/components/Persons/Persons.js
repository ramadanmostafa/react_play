import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
  props.persons.map((person) => {
    return (
        <Person
          name={person.name}
          key={person.id}
          age={person.age}
          click={props.clicked.bind(this, person.id)}
          changeName={(event) => props.changed(event, person.id)}
        >
          {person.hobby ? "My Hobby: " + person.hobby : null}
        </Person>
    );
  })
);

export default persons;