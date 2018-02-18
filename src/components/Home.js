import React, { Component } from 'react';
import logo from '../bigLogo.png';

class Home extends Component{

  render() {
    return (
      <div className="mainContainer">
        <header className="bigHeader">
          <img className="bigLogo" src={logo} alt="logo"/>
          <p>I am <strong>greater</strong> than my ups and downs.</p>
        </header>    
        <div>  
        <a href="/Step1/"><button className="bigBtn">Get Help Now</button></a>
          <button className="bigBtn">Start Your Journey</button>
        </div>  
      </div>  
    )
  }
}

export default Home;