import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

import SearchForm from './searchForm.jsx'
import {
  searchFieldSelected, searchFieldSubmitted } from '../actions/searchActions'


@connect((store) => {
  return {
    searchFieldText: store.search.searchFieldText
  };
})
export default class Header extends React.Component {
  componentDidMount() {
    let dispatch = this.props.dispatch
  }

  render() {
    const { dispatch, searchFieldText } = this.props;

    var searchPlaceholder
    if (searchFieldText === '' || searchFieldText === undefined) {
      searchPlaceholder = 'search'
    } else {
      searchPlaceholder = searchFieldText
    }

    return (
      <div className='header'>
        <div className='title'>FlyGearFinder</div>
        <Header
          dispatch={dispatch}
          placeholder={searchPlaceholder}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    )
  }

  handleSearchSubmit(event) {
    console.log('Ref: ' + this.refs.searchInput)
    this.props.dispatch(searchFieldSubmitted(this.refs.searchInput))
  }
}
