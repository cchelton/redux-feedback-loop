//  selector 1-5
import React, { Component } from "react";
import { connect } from "react-redux";

class RatingSelector extends Component {
  handleSelection = (event) => {
    this.props.dispatch({
      type: "MODIFY_NEW_FEEDBACK",
      payload: {
        property: this.props.property,
        value: event.target.value,
      },
    });
  };

  render() {
    return (
      <select onChange={this.handleSelection} value={this.props.value}>
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

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(RatingSelector);
