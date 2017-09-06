import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import Search from '../components/search.jsx'
import SocialMedia from '../components/socialMedia.jsx'
import {
  searchFieldSelected, searchFieldSubmitted } from '../actions/searchActions'
import { fetchProducts } from '../actions/productsActions'


@connect((store) => {
  return {
    searchFieldText: store.search.searchFieldText
  };
})
export default class HeaderContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    const { dispatch, searchFieldText } = this.props;

    return (
      <div className='header'>
        <div className='title'>FlyGearFinder</div>
        <Search
          dispatch={dispatch}
          searchFieldText={searchFieldText}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <SocialMedia />
      </div>
    )
  }

  handleSearchSubmit(event, dispatch, value) {
    event.preventDefault()
    dispatch(searchFieldSubmitted(value))
    dispatch(fetchProducts())
  }
}
