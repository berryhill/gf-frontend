import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route } from 'react-router'

import store from "./store"
import ProductsContainer from './containers/productsContainer.jsx'
import HeaderContainer from './containers/headerContainer.jsx'
import Filters from './components/filters.jsx'
import Footer from './components/footer.jsx'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
        <div className='filter-col'>
          <Provider store={store}>
            <Filters />
          </Provider>
        </div>
        <div className='product-col'>
          <Provider store={store}>
            <ProductsContainer />
          </Provider>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}
