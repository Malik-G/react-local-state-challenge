import React, { Component } from 'react';
import Header from '../Header/Header';
import FamousPersonForm from '../FamousPerson/FamousPersonForm';
import FamousPerson from '../FamousPerson/FamousPerson';
import FamousPersonList from '../FamousPerson/FamousPersonList';
import './App.css';

class App extends Component {
  
  state = {
    celebrity: {
      name: '',
      famousFor: ''
    },
    allCelebrities: []
  }

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState( { 
        celebrity: {
          ...this.state.celebrity,
          [propertyName]: event.target.value 
        }
      });
    }
  }

  submitCelebrity = (event) => {
    event.preventDefault();
    this.setState({
      celebrity: {
        name: '',
        famousFor: '',
      },
      allCelebrities: [ ...this.state.allCelebrities, this.state.celebrity ],
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <FamousPersonForm celebrity={this.state.celebrity}
                  handleChangeFor={this.handleChangeFor}
                  submitCelebrity={this.submitCelebrity}/>
        <FamousPerson celebrity={this.state.celebrity}/>
        <FamousPersonList list={this.state.allCelebrities}/>
      </div>
    );
  }
}

export default App;
