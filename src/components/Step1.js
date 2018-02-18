import React, { Component } from 'react';
import logo from './../bigLogo.png';



class Step1 extends Component{
  render() {
    return (
      <div className="mainContainer">
        <header className="bigHeader">
          <img className="bigLogo" src={logo} alt="logo"/>
          <p>I am <strong>greater</strong> than my ups and downs.</p>
        </header>    
        <div>  
        <button className="bigBtn">Emergency</button>
         <a href="/NE"> <button className="bigBtn">Non-Emergency</button></a>
        </div>  
      </div>  
    )
  }
}

export default Step1;