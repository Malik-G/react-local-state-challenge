
import React, { Component } from 'react';

class FamousPersonForm extends Component {

  render() {
    return (
      <section>
          <h2>Add a Celebrity</h2>
          <form onSubmit={this.props.submitCelebrity}>
            <label htmlFor="nameInput">Name:</label>
            <input id="nameInput" onChange={this.props.handleChangeFor('name')} 
                   value={this.props.celebrity.name} />
            <label htmlFor="famousForInput">Famous For:</label>
            <input id="famousForInput" onChange={this.props.handleChangeFor('famousFor')} 
                   value={this.props.celebrity.famousFor} />
            <input type="submit" value="Add" /> 
          </form>
        </section>
    );
  }
}

export default FamousPersonForm;