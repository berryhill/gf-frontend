import React from 'react'
import { connect } from 'react-redux'

import store from '../store'
import Pagination from '../components/pagination.jsx'
import Products from '../components/products.jsx'
import { fetchProducts } from '../actions/productsActions'
import { nextPage, previousPage } from '../actions/productsActions'

@connect((store) => {
  return {
    searchFieldText: store.search.searchFieldText,
    products: store.products.products,
    productsFetched: store.products.fetched,
    metadata: store.products.metadata
  };
})
export default class ProductsContainer extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { dispatch, products, metadata } = this.props;

    if (products == null) {
      return (
        <div>
          <li>No Results</li>
        </div>
      )
    } else {
      return (
        <div>
          <Products
            products={products}
          />
          <Pagination
            dispatch={dispatch}
            metadata={metadata}
            handleNextPage={this.handleNextPage}
            handlePrevPage={this.handlePrevPage}
          />
        </div>
      )
    }
  }

  handleNextPage(dispatch, metadata, event) {
    dispatch(nextPage(metadata))
    dispatch(fetchProducts())
  }

  handlePrevPage(dispatch, metadata, event) {
    dispatch(previousPage(metadata))
    dispatch(fetchProducts())
  }
}
