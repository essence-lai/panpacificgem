import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index';
import Products from './components/products/index';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
        <Router>
            <div >
                <Route exact path="/" component={Home}/>
                <Route path="/products" component={Products}/>
            </div>
        </Router>
    );
  }
}

export default App;
