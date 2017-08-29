import React, {Component} from 'react';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import Products from './components/products.jsx';
import Filters from './Filters.jsx';
import store from "./store";
import Header from "./components/header.jsx"


export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <Header />
        </Provider>

        <div className='filter-col'>

        </div>
        <div className='product-col'>
        <Provider store={store}>
          <Products />
        </Provider>
        </div>
      </div>
    );
  }
}
