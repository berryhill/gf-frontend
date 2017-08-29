import { combineReducers } from "redux"

import products from './productsReducer'
import search from './searchReducer'

export default combineReducers({
  products,
  search
})
