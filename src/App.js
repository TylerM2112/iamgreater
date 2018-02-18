import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/components/Home';
import Breathing from '../src/components/Breathing';
import Header from '../src/components/Header';
import Step1 from '../src/components/Step1';
import Ne from '../src/components/Ne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/breathing" component={Breathing} />
        <Route path="/step1" component={Step1} />
        <Route path="/ne" component={Ne} />
        </Switch>
      </div>
    );
  }
}

export default App;
