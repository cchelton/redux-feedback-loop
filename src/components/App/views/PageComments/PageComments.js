import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";
import TextInput from "../../../TextInput/TextInput";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageComments.css";

class PageComments extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h5" className="cardTitle">
          Would you like to leave any comments?
        </Typography>
        <div className="TextInput">
          <TextInput property="comments" />
        </div>
        <NextButton nextPath="/review" pageVal="comments" />
      </Card>
    );
  }
}

export default PageComments;
