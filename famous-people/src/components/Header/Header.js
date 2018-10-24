import React, { Component } from 'react'; // If componet is taken out here, line 4 would need to read React.Componet
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Famous People</h1>  
      </header>
    );
  }
}

export default Header;