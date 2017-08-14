import React, {Component} from 'react';
var api = require('./utils/api');

function ProductsGrid (props) {
  if (props.products) {
    return (
      <ul className='product-list'>
        {props.products.map(function (product, index) {
          return (
            <li key={index} className='product-item'>
              <ul className='product-text'>
                <img
                  className='product-image'
                  src={'https://'+product.image} />
              </ul>
              <div className='product-text'>
                <ul>
                  {product.name}
                </ul>
                <ul>
                  {product.price}
                </ul>
              </ul>
          </li>
          )
        })}
      </ul>
    )
  }

  return null
}

class Products extends Component {
  constructor(props) {
    super()
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    api.fetchProducts("fly_rods")
    .then(function (products) {
      console.log(products[0].image)
      this.setState(function () {
        return {
          products: products
        }
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <ProductsGrid products={this.state.products} />
      </div>

    );
  }
}

export default Products;
