import React, {Component} from 'react';
import Products from './Products.jsx';
import Filters from './Filters.jsx';
// import App from './App.jsx';
import filtersExpandCollapse from './Filters.jsx';


import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(filtersExpandCollapse);

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='title'>FLYGEARFINDER</div>
        </div>
        <div className='right-col'>
          <Filters store={store}/>
        </div>
        <div className='left-col'>
          <Products />
        </div>
      </div>
    );
  }
}
export default App;
