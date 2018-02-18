import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Home from '../src/components/Home';
import Breathing from '../src/components/Breathing';
// import Header from '../src/components/Header';
import Step1 from '../src/components/Step1';
import Ne from '../src/components/Ne';
import Ne2 from '../src/components/Ne2';
import Ne3 from '../src/components/Ne3';
import Ne4 from '../src/components/Ne4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/breathing" component={Breathing} />
        <Route path="/step1" component={Step1} />
        <Route path="/ne" component={Ne} />
        <Route path="/ne2" component={Ne2} />
        <Route path="/ne3" component={Ne3} />
        <Route path="/ne4" component={Ne4} />
        </Switch>
      </div>
    );
  }
}

export default App;
