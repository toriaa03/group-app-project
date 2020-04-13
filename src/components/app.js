import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import NavContainer from './navigation/nav-container';
import Homepage from './pages/home';
import Profile from './pages/profile';
import Messaging from './pages/messaging';
import About from './pages/about';
import Help from './pages/help';
import Login from './auth/login';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {


    }
  }
  render() {
    return (
      <div className='app'>
        <Router>
        <NavContainer />

        <Route exact path="/" component={Homepage} />
        <Route path="/messaging" component={Messaging} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/login" component={Login} />



        </Router>
      </div>
    );
  }
}
