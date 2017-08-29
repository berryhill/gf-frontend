import thunk from "redux-thunk"

import { isEmpty, encodeQueryData } from "./helpers"


export function searchFieldSelected(props) {

  return dispatch => {
    dispatch({type: "SEARCH_FIELD_SELECTED"})
  }
}

export function searchFieldSubmitted(props) {

  return dispatch => {
<<<<<<< HEAD
    console.log("Search Term: " + props)
=======
    console.log("CALLED")
    console.log(props)
>>>>>>> Implement the search input component
    dispatch({type: "SEARCH_FIELD_SUBMITTED", payload: props})
  }
}
