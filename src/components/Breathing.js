import React, { Component } from 'react';
import Header from './Header';
import '../App.css';


class Breathing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      rangeInput: 20,
      timerInput: 5,
    }
    // this.toast = this.toast.bind(this);
    this.goBreathe = this.goBreathe.bind(this);
    this.removeDoneTimer = this.removeDoneTimer.bind(this);
  }

  componentDidMount() {
    document.getElementById("range").innerText = "10 seconds for each breath.";
    document.getElementById("circle").style.webkitAnimationName = "";
    document.getElementById("timerInput").innerText = "5 minutes to just breathe.";
  }

  rangeCounter(e) {
    document.getElementById("range").innerText = `${e} seconds for each breath.`;
    this.setState({ rangeInput: e });
    // console.log(e);
    document.getElementById("circle").style.animationDuration = `${e*2}s`;
  }

  timerCounter(e) {
    document.getElementById("timerInput").innerText = `${e} minutes to just breathe.`;
    this.setState({ timerInput: e });
    console.log(e)
  }

  goBreathe() {
    // document.getElementById("circle").style.animation = "animation: infinite"
    document.getElementById("circle").style.animationDuration = `${this.state.rangeInput}s`;
    document.getElementById("circle").style.webkitAnimationName = "breathe";
    let timer = (this.state.timerInput * 60)/this.state.rangeInput;
    // console.log(timer);
    document.getElementById("circle").style.webkitAnimationIterationCount = timer;
    // let i = timer;
    let time = (this.state.timerInput * 60) * 1000;
    console.log(time);
    setTimeout(()=>this.toast(),1000)
    }
    
  toast() {
    // alert("hi")
    this.document = window;
    document.getElementById("doneTimer").style.display = "inherit";
    document.getElementById("doneTimer").style.webkitAnimationName = "doneTimer"
    document.getElementById("doneTimer").style.animationDuration = "3s"
    // setTimeout(()=>document.getElementById("doneTimer").style.display = "none",5000)
    // console.log(document.getElementById("doneTimer").style.display)
  }

  removeDoneTimer() {
    // this.document = window;
    document.getElementById("doneTimer").style.webkitAnimationName = "doneTimerEnd"
    document.getElementById("doneTimer").style.animationDuration = "1.5s"
    this.document = window;
    setTimeout(()=>document.getElementById("doneTimer").style.display = "none",1500)
  }

  
  render() {
    return (
      <div>
      <Header />    
      <div className="breathingContainer" >
        <div className="circleContainer">
          <div id="circle"><div><div id="breatheText">breathe</div></div> </div>
        </div>  
      <div class="inputDiv">
        <label id="range" ></label>
        
          <br />
        <br />  
        <input className="rangeInput" min="3" max="10" onChange={e => this.rangeCounter(e.target.value)} type="range" />
        <br />
        <label id="timerInput"></label>
          <br />
          <br />   
        <input className="rangeInput" min="2" max="5" type="range" id="timer" onChange={e=>this.timerCounter(e.target.value)}/>
        <br/>
        <button className="readyBtn" onClick={e => this.goBreathe()} >You ready?</button>

          <div id="doneTimer">
            <div className="exitBtn"><button onClick={e => this.removeDoneTimer()}>X</button></div>     
          <div >
            You did it!
            <br />
            Still need to talk? <a href="#" >Click Here.</a>
            </div>
          
        </div>  
      </div>
        </div> 
        </div>
    );
  }
}

export default Breathing; 