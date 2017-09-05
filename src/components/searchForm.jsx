import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
// import { Field, reduxForm } from 'redux-form'

import { searchFieldSelected, searchFieldSubmitted } from '../actions/searchActions'

// let SearchForm = props => {
//   const { handleSubmit } = props
//   return (
//     <form onSubmit={ handleSubmit }>
//       <div>
//         <Field className='search-input' component="input" type="text"
//         placeholder='search'/>
//       </div>
//     </form>
//   )
// }
//
// export default SearchForm = reduxForm({
//   // a unique name for the form
//   form: 'search'
// })(SearchForm)


export default class SearchForm extends React.Component {

  render() {
    return (
      <form className='search-input'>
        <FormGroup controlId="searchForm">
          <ControlLabel>search</ControlLabel>
          <FormControl
            type='text'
            placeholder={this.props.searchPlaceholder}
            onChange={this.handleChange}
            onSubmit={searchFieldSubmitted}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(event) {
    console.log("Search Changed")
  }

  handleSubmit(event) {
    searchFieldSubmitted(values)
    console.log("Search Submitted")
  }
}
