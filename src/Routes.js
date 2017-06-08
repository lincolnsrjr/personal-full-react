import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './landingPage/components/LandingPage';


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
        </Switch>
    </Router>
    );
  }
}

