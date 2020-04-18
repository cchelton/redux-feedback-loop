// input field for comments
import React, { Component } from "react";
import { connect } from "react-redux";

class TextInput extends Component {
  handleChange = (event) => {
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
      <textarea
        onChange={this.handleChange}
        value={this.props.store.newFeedbackReducer.comments}
      />
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(TextInput);
