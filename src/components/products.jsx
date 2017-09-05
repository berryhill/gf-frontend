import React from 'react'
import { connect } from 'react-redux'

import store from '../store'
import Pagination from '../components/pagination'
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
export default class Products extends React.Component {

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
          <ul className='product-list'>
            {products.map(function (product, index) {
              return (
                <li key={index} className='product-item'>
                  <img
                    className='product-image'
                    src={'https://'+ product.image}
                  />
                  <div className='product-text'>
                    <ul>{product.brand}</ul>
                    <ul>{product.name}</ul>
                    <ul>{product.price}</ul>
                  </div>
                </li>
              )
            })}
          </ul>
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
