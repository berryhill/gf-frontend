import React, {Component} from 'react';
import Products from './Products.jsx';
import Filters from './Filters.jsx';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

function filtersExpandCollapse(state={
  filters: 'filters-closed',
  buttonPushState: [false, false, false] }, action) {

  switch(action.type) {
    case 'EXPAND':
      return Object.assign({}, state, { filters: 'filters-open' });
      // return 'filters-open'
    case 'COLLAPSE':
      return Object.assign({}, state, { filters: 'filters-closed' });
      // return 'filters-closed'
    default:
      return state
  }
}

const store = createStore(filtersExpandCollapse);

const mapStateToProps = function (state) {
  return {state};
}

const FilterList = connect(mapStateToProps)(Filters);

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='title'>FLYGEARFINDER</div>
        </div>
        <div className='right-col'>
          <Provider store={store}>
            <FilterList />
          </Provider>
        </div>
        <div className='left-col'>
          <Products />
        </div>
      </div>
    );
  }
}
export default App;
