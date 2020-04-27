import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import Admin from './components/Admin';
import './App.css';
import './font-awesome/font-awesome.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends Component {
  render() {
      return (
        <Router>
            <Switch>
              <Route path="/admin" exact component={Admin} />
              <Route path="/" component={MainLayout} />
            </Switch>
        </Router>
      )
  }
}

export default App;
