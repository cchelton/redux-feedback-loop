//  selector 1-5
import React, { Component } from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import Tooltip from "@material-ui/core/Tooltip";

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
      <div>
        <Tooltip title="1" arrow>
          <Radio
            checked={
              this.props.store.newFeedbackReducer[this.props.property] === "1"
            }
            onChange={this.handleSelection}
            value="1"
            color="primary"
          />
        </Tooltip>

        <Tooltip title="2" arrow>
          <Radio
            checked={
              this.props.store.newFeedbackReducer[this.props.property] === "2"
            }
            onChange={this.handleSelection}
            value="2"
            color="primary"
          />
        </Tooltip>

        <Tooltip title="3" arrow>
          <Radio
            checked={
              this.props.store.newFeedbackReducer[this.props.property] === "3"
            }
            onChange={this.handleSelection}
            value="3"
            color="primary"
          />
        </Tooltip>

        <Tooltip title="4" arrow>
          <Radio
            checked={
              this.props.store.newFeedbackReducer[this.props.property] === "4"
            }
            onChange={this.handleSelection}
            value="4"
            color="primary"
          />
        </Tooltip>

        <Tooltip title="5" arrow>
          <Radio
            checked={
              this.props.store.newFeedbackReducer[this.props.property] === "5"
            }
            onChange={this.handleSelection}
            value="5"
            color="primary"
          />
        </Tooltip>
      </div>

      // <select onChange={this.handleSelection} value={this.props.value}>
      //   <option value="">Please select 1-5</option>
      //   <option value="1">1</option>
      //   <option value="2">2</option>
      //   <option value="3">3</option>
      //   <option value="4">4</option>
      //   <option value="5">5</option>
      // </select>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(RatingSelector);
