import thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux"

import store from "../store";


export default function reducer(state={
  fetching: false,
  fetched: false,
  metadata: {
    count: 0,
    page: 1,
    per_page:10,
    page_count: 1
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
      return {
        ...state,
        fetching: false,
        fetched: true,
        metadata: action.payload.metadata,
        products: action.payload.results
      }
    }
    case "NEXT_PAGE": {
      if (action.payload.page < action.payload.page_count) {
        let metadata = action.payload
        metadata.page = metadata.page + 1
        return {...state, metadata: metadata}
      }
    }
    case "PREV_PAGE": {
      if (action.payload.page > 1) {
        let metadata = action.payload
        metadata.page = metadata.page - 1
        return {...state, metadata: metadata}
      }
    }
  }
  return state
}
