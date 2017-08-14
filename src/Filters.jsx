import React, {Component} from 'react';
import Button from './Button.jsx'
import {createStore} from 'redux';

function filtersExpandCollapse(state=0, action) {
  switch(action.type) {
    case 'EXPAND':
      return true;
    case 'COLLAPSE':
      return false;
  }
}

function FiltersList (props) {
  var filtersStyle;
  if (props.expand) {
    filtersStyle = 'filters-open'
  } else {
    filtersStyle = 'filters-closed'
  }

  if (props.filters) {
    return (
      <div className>
        <div className='filters-list'>
          {props.filters.map(function (filter, index) {
            return (
              {props.store.getState()}
              <Button text={filter}
                onClick={this.expandFilters.bind.(this)}/>
            )
          })}
        </div>
        <div className={filtersStyle}>
        </div>
      </div>
    )
  }
  return null
}

class Filters extends Component {
  constructor(props) {
    super()
    this.state = {
      filters: ["Hot Deals", "Brand", "Price"],
      expand: false,
    };
  }

  expandFilters() {
    if (this.state.expand) {
      this.props.start.dispatch({
        type: 'EXPAND'
      });
    } else {
      this.props.start.dispatch({
        type: 'COLLAPSE'
      });
    }
  }

  // expandFilters = this.expandFilters.bind(this);
  // expandFilters() {
  //   console.log("Called")
  //   this.setState(function () {
  //     return {
  //       expand: true
  //     }
  //   })
  }

  // handleClick = this.handleClick.bind(this);
  // handleClick() {
  //   console.log("I've been clicked");
  // }

  // componentDidMount() {
  //   this.setState(function () {
  //
  //   })

  render() {
    return (
      <div>
        <FiltersList filters={this.state.filters}
          expand={this.state.expand} />
      </div>
    );
  }
}

export default Filters;
