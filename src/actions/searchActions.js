import thunk from "redux-thunk"

import { isEmpty, encodeQueryData } from "./helpers"


export function searchFieldSelected(props) {

  return dispatch => {
    dispatch({type: "SEARCH_FIELD_SELECTED"})
  }
}

export function searchFieldSubmitted(props) {

  return dispatch => {
    console.log("Search Term: " + props)
    dispatch({type: "SEARCH_FIELD_SUBMITTED", payload: props})
  }
}
