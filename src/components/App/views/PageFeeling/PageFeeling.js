import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageFeeling.css";

class PageFeeling extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h5" className="cardTitle">
          How are you feeling today?
        </Typography>
        <div className="Selector">
          <RatingSelector
            property="feeling"
            value={this.props.store.newFeedbackReducer.feeling}
          />
        </div>
        <NextButton
          nextPath="./understanding"
          pageVal={this.props.store.newFeedbackReducer.feeling}
        />
      </Card>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageFeeling);
