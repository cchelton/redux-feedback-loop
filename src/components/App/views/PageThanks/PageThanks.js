//  display thank you message for completing feedback and have button to restart whole feedback process.
//  probably should clear the store on submit
import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageThanks.css";

class PageThanks extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h5" className="cardTitle">
          Thanks for submitting your feedback.
        </Typography>
        <NextButton nextPath="/" text="NEW FEEDBACK" />
      </Card>
    );
  }
}

export default PageThanks;
