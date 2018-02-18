import React, { Component } from 'react';
import logo from '../logo.png';

class Header extends Component{

  render() {
    return (
    <header className="App-header">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
      </header>
    )  
  }    
}

export default Header;