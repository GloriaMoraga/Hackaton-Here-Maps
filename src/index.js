import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Router>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/app' component={App} />
      
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
