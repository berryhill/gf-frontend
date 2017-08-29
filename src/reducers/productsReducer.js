import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

export default function reducer(state={
  fetching: false,
  fetched: false,
  products: [],
  error: null,
}, action) {
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

// const middleware = applyMiddleware(thunk, logger())
// const store = createStore(reducer, middleware)

// store.dispatch(dispatch) => {
//   dispatch({type: "FETCH_PRODUCTS_START"})
//   axios.get("http://localhost:8080/products/fly_rods")
//     .then((response) +. {
//       dispatch({type: "RECEIVE_PRODUCTS", payload: response.data})
//     })
//     .catch((err) => {
//       dispatch({type: "FETCH_PRODUCTS_ERROR", payload: err})
//     })
// }
