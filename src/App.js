import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/components/Home';
import Breathing from '../src/components/Breathing';
import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Ne from '../src/components/Ne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
        <Route path="/home" component={Home} />
        <Route path="/breathing" component={Breathing} />
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/ne" component={Ne} />
        </Switch>  
      </div>
    );
  }
}

export default App;
