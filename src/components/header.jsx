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
  componentWillMount() {
    console.log(this.props)
  }

  handleSearchSubmit = (event) => {
<<<<<<< HEAD

    console.log('Ref: ' + this.refs.searchInput)

    this.props.dispatch(searchFieldSubmitted(this.refs.searchInput))
=======
    console.log('inputRef: ' + this.inputNode)
    console.log('Ref: ' + this.refs.searchInput)

    this.props.dispatch(searchFieldSubmitted())
>>>>>>> Implement the search input component
  }

  render() {
    const { searchFieldText } = this.props;

    var searchPlaceholder
<<<<<<< HEAD
    if (searchFieldText === '' || searchFieldText === undefined) {
=======
    if (searchFieldText === '') {
>>>>>>> Implement the search input component
      searchPlaceholder = 'search'
    } else {
      searchPlaceholder = searchFieldText
    }

    return (
      <div className='header'>
        <div className='title'>FlyGearFinder</div>
<<<<<<< HEAD
        <form>
          <FormGroup controlId="searchForm">
            <FormControl
              name='search'
              className='search-input'
              type='text'
              placeholder={searchPlaceholder}
              onSubmit={this.handleSearchSubmit()}
=======
        <form className='search-input'>
          <FormGroup controlId="searchForm">
            <ControlLabel>search</ControlLabel>
            <FormControl
              name='searchInput'
              type='text'
              placeholder={searchPlaceholder}
              onSubmit={this.handleSearchSubmit()}
              inputRef={node => this.inputNode = node}
>>>>>>> Implement the search input component
              ref='searchInput'
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    )
  }
}
