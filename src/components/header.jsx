import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

import SearchForm from './searchForm.jsx'
import {
  searchFieldSelected, searchFieldSubmitted } from '../actions/searchActions'
import { fetchProducts } from '../actions/productsActions'


@connect((store) => {
  return {
    searchFieldText: store.search.searchFieldText
  };
})
export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    const { searchFieldText } = this.props;

    var searchPlaceholder
    if (searchFieldText === '' || searchFieldText === undefined) {
      searchPlaceholder = 'search'
    } else {
      searchPlaceholder = searchFieldText
    }

    return (
      <div className='header'>
        <div className='title'>FlyGearFinder</div>
        <form onSubmit={(event) => this.handleSearchSubmit(event)}>
          <input
            name='search'
            className='search-input'
            type='text'
            placeholder={searchPlaceholder}
            ref='searchInput'
            onChange={(event) => this.handleChanges(event)}
          />
        </form>
      </div>
    )
  }

  handleChanges(event){
    this.setState({value: event.target.value})
  }

  handleSearchSubmit(event) {
    event.preventDefault()
    this.props.dispatch(searchFieldSubmitted(this.state.value))
    this.props.dispatch(fetchProducts())
  }
}
