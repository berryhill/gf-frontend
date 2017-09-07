import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers"


const middleware = applyMiddleware(thunk)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(
  reducer, /* preloadedState, */ composeEnhancers(middleware))
/* eslint-enable */
