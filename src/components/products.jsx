import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productsActions'


@connect((store) => {
  return {
    searchFieldText: store.search.searchFieldText,
    products: store.products.products,
    productsFetched: store.products.fetched,
  };
})
export default class Products extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { products } = this.props;

    if (products == null) {
      return (
        <div>
          <li>No Results</li>
        </div>
      )
    } else {
      return (
        <ul className='product-list'>
          {products.map(function (product, index) {
            return (
              <li key={index} className='product-item'>
                <ul className='product-text'>
                  <img
                    className='product-image'
                    src={'https://'+ product.image} />
                </ul>
                <div className='product-text'>
                  <ul>
                    {product.name}
                  </ul>
                  <ul>
                    {product.price}
                  </ul>
                </div>
            </li>
            )
          })}
        </ul>
      )
    }
  }
}
