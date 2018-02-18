import React, { Component } from 'react';
import logo from '../bigLogo.png';
import { Link } from 'react-router-dom';

class Home extends Component{

  render() {
    return (
      <div className="mainContainer">
        <header className="bigHeader">
          <img className="bigLogo" src={logo} alt="logo"/>
          <p>I am <strong>greater</strong> than my ups and downs.</p>
          <div className="linksDiv">
            <a href="#">Login</a>
            <a href="#">FAQ</a>
          </div>
        </header>    
        <div>  
        <Link to="/step1/"><button className="bigBtn">Get Help Now</button></Link>
          <button className="bigBtn">Start Your Journey</button>
          </div>
          <div>
            <Link to="/breathing" > <button className="bigBtn">Calming Breathing Exercise</button> </ Link>
          </div>   
      </div>  
    )
  }
}

export default Home;