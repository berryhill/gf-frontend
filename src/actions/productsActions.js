import thunk from 'redux-thunk'
import axios from 'axios'

import { isEmpty, encodeQueryData } from './helpers'
import store from '../store'


export function fetchProducts() {
  let url = 'http://localhost:8080/products/fly_rods'
  let queryParams = {}

  if (store.getState().search.searchFieldText !== '') {
    queryParams['search'] = store.getState().search.searchFieldText
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
