import React, { Component } from 'react';

class Tdc extends Component {
  render() {
    return (
      <td data-value={this.props.value} onClick={this.props.func}>
          {this.props.value}
      </td>
    );
  }
}

export default Tdc;