import React, {Component} from 'react';
var api = require('../utils/api');

class Products extends Component {
  constructor(props) {
    super()
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    // api.fetchProducts("fly_rods")
    //   .then(function (products) {
    //   console.log(products[1])
    // });

    api.fetchProducts("fly_rods")
      .then(function (products) {
      this.setState(function () {
        return {
          products: products
        }
      })
    });
  }

  render() {
    return (
      <h1>{products}</h1>
    );
  }
}

export default App;
