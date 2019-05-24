import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage/LoginPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage'
import HomePage from './components/HomePage/HomePage.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Edit from './components/Comentarios/Edit.js';
import Ingresa from './components/Ingresa/Ingresa.js';
import Create from './components/Comentarios/Create.js';
import Show from './components/Comentarios/Show.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Router>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/app' component={App} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/create' component={Create} />
      <Route path='/ingresar' component={Ingresa} />
     <Route path='/show/:id' component={Show} />
      
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
