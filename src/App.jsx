import React, {Component} from 'react';
import Products from './Products.jsx';
import Filters from './Filters.jsx';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

function filtersExpandCollapse(state={
  filters: 'filters-closed',
  productTypeButtonState: [false, false, false, false, false] },
  action) {

  switch(action.type) {
    case 'FLYRODS':
      return Object.assign(
        {}, state, {
          productTypeButtonState: [!state.productTypeButtonState[0], false, false, false, false]
        });
    case 'FLYREELS':
      return Object.assign(
        {}, state, {
          productTypeButtonState: [false, !state.productTypeButtonState[1], false, false, false]
        });
    case 'COLLAPSE':
      return Object.assign({}, state, { filters: 'filters-closed' });
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
          <div className='title'>FlyGearFinder</div>
          <input className='search-input' placeholder="SEARCH" type="text"/>
        </div>
        <div className='filter-col'>
          <Provider store={store}>
            <FilterList />
          </Provider>
        </div>
        <div className='product-col'>
          <Products />
        </div>
      </div>
    );
  }
}
export default App;
