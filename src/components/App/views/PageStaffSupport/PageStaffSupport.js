import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageStaffSupport.css";

class PageStaffSupport extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h5" className="cardTitle">
          How well did staff support you today?
        </Typography>
        <div className="Selector">
          <RatingSelector
            property="support"
            value={this.props.store.newFeedbackReducer.support}
          />
        </div>
        <NextButton
          nextPath="./comments"
          pageVal={this.props.store.newFeedbackReducer.support}
        />
      </Card>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageStaffSupport);
