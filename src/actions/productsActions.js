import thunk from "redux-thunk"
var axios = require('axios');

import { isEmpty, encodeQueryData } from "./helpers"


export function fetchProducts(props) {
  let url = 'http://localhost:8080'
  let queryParams = {}

  if (props.searchFieldText !== undefined) {
    queryParams['search'] = props.searchFieldText
  }

  if (!isEmpty(queryParams)) {
      url = url + '?'+ encodeQueryData(queryParams)
  }

  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCTS_START"})
    axios.get(url)
      .then((response) => {
        dispatch({type: "RECEIVE_PRODUCTS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCTS_ERROR", payload: err})
      })
  }
}