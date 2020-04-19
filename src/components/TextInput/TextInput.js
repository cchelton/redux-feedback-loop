// input field for comments
import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import "./TextInput.css";

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
      <TextField
        className="TextFieldInput"
        label="Comments:"
        multiline
        rowsMax="8"
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
