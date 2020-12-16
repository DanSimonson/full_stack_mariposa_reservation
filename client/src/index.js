import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Products from './components/Products'
import Basket from './components/Basket'
//import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/products" component={Products} />
      <Route path="/basket" component={Basket} />
    </div>
  </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));
//registerServiceWorker();
