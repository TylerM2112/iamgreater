import React, { Component } from 'react';
import logo from '../bigLogo.png';

class Header extends Component{

  render() {
    return (
    <header className="App-header">
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
      <div className="linksDiv">
        <a href="#">Login</a>
        <a href="#">FAQ</a>
      </div>
      </header>
    )  
  }    
}

export default Header;