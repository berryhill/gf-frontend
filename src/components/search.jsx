import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'


export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  render() {
    const { dispatch, searchFieldText, metadata } = this.props;

    var searchPlaceholder
    if (searchFieldText === '' || searchFieldText === undefined) {
      searchPlaceholder = 'search'
    } else {
      searchPlaceholder = searchFieldText
    }

    return (
      <form onSubmit={(event) =>
        this.props.handleSearchSubmit(
          event, dispatch, this.state.value, metadata)}
      >
        <FormGroup controlId="searchForm">
          <FormControl
            name='search'
            className='search-input'
            type='text'
            placeholder={searchPlaceholder}
            ref='searchInput'
            onChange={(event) => this.handleChanges(event)}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }

  handleChanges(event) {
    this.setState({value: event.target.value})
  }
}
