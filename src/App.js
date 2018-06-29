import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/index';
import Products from './components/products/index';
import ReallySmoothScroll from 'really-smooth-scroll';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router>
                <div >
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" component={Products}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
