import thunk from 'redux-thunk'
import axios from 'axios'

import store from '../store'
import { isEmpty, encodeQueryData } from './helpers'


export function fetchProducts() {
  // let url = 'process.env.URL'
  let url = 'http://104.154.247.230:8080/products/fly_rods'
  let queryParams = {}

  if (store.getState().search.searchFieldText !== '') {
    queryParams['search'] = store.getState().search.searchFieldText
  }

  let metadata = store.getState().products.metadata

  if (metadata.page > 1) {
    queryParams['page'] = store.getState().products.metadata.page
  }

  if (!isEmpty(queryParams)) {
      url = url + '?'+ encodeQueryData(queryParams)
  }

  console.log(url)

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

export function nextPage (props) {

  return dispatch => {
    dispatch({type: "NEXT_PAGE", payload: props})
  }
}

export function previousPage (props) {

  return dispatch => {
    dispatch({type: "PREV_PAGE", payload: props})
  }
}
