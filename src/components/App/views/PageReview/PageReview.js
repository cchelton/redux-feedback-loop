// review and submit here. links back to previous pages. probably will need to reset redux store on submit
import React, { Component } from "react";
import SubmitButton from "../../../SubmitButton/SubmitButton";
import PageReviewTable from "./PageReviewTable/PageReviewTable";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import "./PageReview.css";

class PageReview extends Component {
  render() {
    return (
      <Card className="Card">
        <Typography variant="h4" className="cardTitle">
          Review Your Feedback:
        </Typography>
        <div className="FeedbackTable">
          <PageReviewTable />
        </div>
        <SubmitButton />
      </Card>
    );
  }
}

export default PageReview;
