import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageUnderstanding.css";

class PageUnderstanding extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h5" className="cardTitle">
          How well did you understand todays material?
        </Typography>
        <div className="Selector">
          <RatingSelector
            property="understanding"
            value={this.props.store.newFeedbackReducer.understanding}
          />
        </div>
        <NextButton
          nextPath="/support"
          pageVal={this.props.store.newFeedbackReducer.understanding}
        />
      </Card>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageUnderstanding);
