import React, { Component } from 'react';
import logo from './../bigLogo.png';
import { NavLink } from 'react-router-dom';



class Step1 extends Component{
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
        <button className="bigBtn">Emergency</button>
          <NavLink to="/ne"> <button className="bigBtn">Non-Emergency</button></NavLink>
        </div>  
      </div>  
    )
  }
}

export default Step1;