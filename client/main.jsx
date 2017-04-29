import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import { browserHistory, hashHistory, Router, Route, Redirect, IndexRoute } from 'react-router';


const Main = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
); 

ReactDOM.render(Main, document.getElementById('main'));
