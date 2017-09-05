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
        <div className='social-profiles'>
          <a className='social-profile-icon' href='https://www.facebook.com'>
            <img border="0"
              src='https://www.roguejohnsen.com/images/facebook.png'
              width='44'
              height='44'
            />
          </a>
          <a className='social-profile-icon' href='https://www.twitter.com'>
            <img border='0'
              src='http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png'
              width='48'
              height='48'
            />
          </a>
          <a className='social-profile-icon' href='https://www.google.com'>
            <img border='0'
              src='https://tinbits.io/images/google-plus-grey.png'
              width='44'
              height='44'
            />
          </a>
				  <a href="mailto:" target="_blank">
            <i class="fa fa-envelope fa-2x"></i>
          </a>
			  </div>
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
