import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => <div className={className}><WrappedComponent {...props}/></div>
// };

const withClass = (WrappedComponent, className) => {
  // we can use it in async tasks
  return class extends Component { // there is no name for the class
    render(){
      return <div className={className}><WrappedComponent {...this.props}/></div>
    }
  }
};

export default withClass