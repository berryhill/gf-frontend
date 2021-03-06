import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

import products from './productsReducer'
import search from './searchReducer'


export default combineReducers({
  products,
  search,
  form: formReducer
})
