import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Chat from '../chat';

import Registration from '../registration/registration';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Registration} />
          <Route path="/chat" component={Chat} />
        </Router>
      </div>
    );
  }
}
