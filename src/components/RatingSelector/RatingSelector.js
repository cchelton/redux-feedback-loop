//  selector 1-5
import React, { Component } from "react";

class RatingSelector extends Component {
  render() {
    return (
      <select onChange={this.props.handleSelection} value={this.props.value}>
        <option value="">Please select 1-5</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    );
  }
}

export default RatingSelector;
