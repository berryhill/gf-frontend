import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

export default function reducer(state={
  fetching: false,
  fetched: false,
  metadata: {
    page: 1,
    per_page:10
  },
  products: [],
  error: null,
},
action) {

  switch (action.type) {
    case "FETCH_PRODUCTS_START": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_PRODUCTS_ERROR": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "RECEIVE_PRODUCTS": {
      return {...state, fetching: false, fetched: true, products: action.payload}
    }
  }
  return state
}
