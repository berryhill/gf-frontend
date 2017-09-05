import React, {Component} from 'react'
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
// import Button from './Button.jsx'

let filters = ["Product Type", "Brand", "Price", "Sort"]

// function FiltersGrid (props) {
//   if (props.products) {
//     return (
//     )
//   }
//   return null
// }

class Filters extends Component {

  render() {
    // return (<div>
    //   {this.props.state}
    //   <div>
    //       <div className>
    //         <div className='filters-list'>
    //           {filters.map(function (filter, index) {
    //             return (
    //               <button className='button' onClick={this.expandFilters.bind(this)}>
    //                 {filter}
    //               </button>
    //             )
    //           })}
    //         </div>
    //         <div className='matt'>
    //         </div>
    //       </div>
    //   </div>
    // </div>);

    console.log('render() called')

    // <button className={this.props.state.buttonPushState[0]} onClick={this.expandFilters.bind(this)}>
    //   {filters[0]}
    // </button>

    // <MenuItem className={this.props.state.filters} onSelect={this.handleSelect.bind(this)}>Fly Rods</MenuItem>

    var selectedRods; var selectedReels
    // if (this.props.state.productTypeButtonState[0]) {
    //   selectedRods = 'button-selected'
    // } else {
    //   selectedRods = 'button'
    // }
    //
    // if (this.props.state.productTypeButtonState[1]) {
    //   selectedReels = 'button-selected'
    // } else {
    //   selectedReels = 'button'
    // }

    // <MenuItem className={selectedRods} onSelect={() => this.handleFlyRods(5)}>Fly Rods</MenuItem>
    // <MenuItem className={selectedReels} onSelect={this.handleFlyReels.bind(this)}>Fly Reels</MenuItem>

    return (<div className='filters'>
      <div className='filters-list'>
        <DropdownButton title='Product Type' className='dropdown-button'>
          <MenuItem className='button'>Fly Rods</MenuItem>
          <MenuItem className='button'>Fly Reels</MenuItem>
          <MenuItem className='button'>Line, Leader, & Tippet</MenuItem>
          <MenuItem className='button'>Accessories & Tools</MenuItem>
          <MenuItem className='button'>Apparal</MenuItem>
        </DropdownButton>
        <DropdownButton title='Brand' className='dropdown-button'>
          <MenuItem className='button'>Sage</MenuItem>
          <MenuItem className='button'>Scott</MenuItem>
          <MenuItem className='button'>Orvis</MenuItem>
          <MenuItem className='button'>Scott</MenuItem>
        </DropdownButton>
        <DropdownButton title='Price' className='dropdown-button'>
          <MenuItem className='button'>$50</MenuItem>
          <MenuItem className='button'>$100</MenuItem>
          <MenuItem className='button'>$150</MenuItem>
          <MenuItem className='button'>$200</MenuItem>
          <MenuItem className='button'>$250</MenuItem>
        </DropdownButton>
        <DropdownButton title='Sort' className='dropdown-button'>
          <MenuItem className='button'>Price: Highest-Lowest</MenuItem>
          <MenuItem className='button'>Price: Lowest-Highest</MenuItem>
          <MenuItem className='button'>Brand: A-Z</MenuItem>
          <MenuItem className='button'>Brand: Z-A</MenuItem>
        </DropdownButton>
      </div>
    </div>);
  }
  
  expandFilters() {
    if (this.props.state.filters === 'filters-closed') {
      this.props.dispatch({type: 'EXPAND'});
    } else {
      this.props.dispatch({type: 'COLLAPSE'});
    }
  }

  updateFilterButtonGridState() {
    this.props.dispatch({type: 'BUTTONPUSH'})
  }

  handleProductButton(key) {
    action = PRODUCTBUTTION + key
    this.props.dispatch({type: action})
  }

  handleFlyRods(num) {
    this.props.dispatch({type: 'FLYRODS'})
    console.log('Selected')
    console.log(num)
  }

  handleFlyReels() {
    this.props.dispatch({type: 'FLYREELS'})
    console.log('Selected')
  }
}

// <button className='button' onClick={this.expandFilters.bind(this)}>
//   {filters[0]}
// </button>
// <button className='button' onClick={this.expandFilters.bind(this)}>
//   {filters[1]}
// </button>
// <button className='button' onClick={this.expandFilters.bind(this)}>
//   {filters[2]}
// </button>

export default Filters;
