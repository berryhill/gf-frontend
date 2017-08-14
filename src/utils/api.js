var axios = require('axios');

module.exports = {
  fetchProducts: function (product) {
    var encodedURI = window.encodeURI(
      'http://localhost:1323/products/fly_rods');

    return axios.get(encodedURI).then(function (response) {
      return response.data;
    });
  }
}
