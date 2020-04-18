//  Feedback table for /admin
import React, { Component } from "react";
import { connect } from "react-redux";
import FeedbackRow from "./FeedbackRow/FeedbackRow";

class FeedbackTable extends Component {
  render() {
    const tableRows = this.props.store.adminReducer.map((item, index) => {
      return (
        <FeedbackRow
          feeling={item.feeling}
          understanding={item.understanding}
          support={item.support}
          comments={item.comments}
          flagged={item.flagged}
          key={index}
        />
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Flagged</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(FeedbackTable);
