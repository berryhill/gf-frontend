import thunk from "redux-thunk"

import { isEmpty, encodeQueryData } from "./helpers"

import { fetchProducts } from './productsActions'


export function searchFieldSelected(props) {

  return dispatch => {
    dispatch({type: "SEARCH_FIELD_SELECTED"})
  }
}

export function searchFieldSubmitted(props) {

  return dispatch => {
    dispatch({type: "SEARCH_FIELD_SUBMITTED", payload: props})
  }
}
