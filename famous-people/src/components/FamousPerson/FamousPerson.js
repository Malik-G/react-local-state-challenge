import React, { Component } from 'react';
import './FamousPerson.css'

class FamousPerson extends Component {
  render() {
    return (
      <section>
        <p>{this.props.celebrity.name} is famous for {this.props.celebrity.famousFor} </p>  
      </section>
    );
  }
}

export default FamousPerson;