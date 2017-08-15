import React, {Component} from 'react'
import Button from './Button.jsx'

let filters = ["Hot Deals", "Brand", "Price"]

class Filters extends Component {
  expandFilters() {
    if (this.props.state.filters === 'filters-closed') {
      this.props.dispatch({type: 'EXPAND'});
    } else {
      this.props.dispatch({type: 'COLLAPSE'});
    }
  }

  updateFilterButtonGridState() {}

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
    console.log(this.props.state.filters)

    return (<div>
      <div className='filters-list'>
        <button className='button' onClick={this.expandFilters.bind(this)}>
          {filters[0]}
        </button>
        <button className='button' onClick={this.expandFilters.bind(this)}>
          {filters[1]}
        </button>
        <button className='button' onClick={this.expandFilters.bind(this)}>
          {filters[2]}
        </button>
        </div>
        <div className={this.props.state.filters}>
        <button className='button' onClick={this.expandFilters.bind(this)}>
          Sage
          </button>
          <button className='button' onClick={this.expandFilters.bind(this)}>
            Orvis
          </button>
        <div>
          Finished
        </div>
      </div>
    </div>);
  }
}

export default Filters;
