import React, {Component}  from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from './../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  componentDidMount(){
    this.inputElement.focus();
  }
  
  render(){
    
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and i am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type='text'
          onChange={this.props.changeName}
          value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);