import React, {Component} from 'react';
import Filters from './Filters.jsx'

class Button extends Component {
  constructor(props) {
    super()
    this.state = {
      text: props.text,
      hover: false,
    };
  }

  toggleHover = this.toggleHover.bind(this);
  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    var buttonStyle;
    if (this.state.hover) {
      buttonStyle = 'button'
    } else {
      buttonStyle = 'button-hover'
    }

    return (
      <button className={buttonStyle} onMouseEnter={this.toggleHover}
      onMouseLeave={this.toggleHover} >
        {this.state.text}
      </button>
    );
  }
}

export default Button;
