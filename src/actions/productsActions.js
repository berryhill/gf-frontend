import thunk from "redux-thunk"
var axios = require('axios');

export function fetchProducts() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCTS_START"})
    axios.get("http://localhost:8080/products/fly_rods")
      .then((response) => {
        dispatch({type: "RECEIVE_PRODUCTS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCTS_ERROR", payload: err})
      })
  }
}
