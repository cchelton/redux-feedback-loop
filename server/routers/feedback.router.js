const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log(`In /feedback GET`);

  const queryText = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`ERROR in GET /feedback:`, err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log(`In /feedback POST`);

  let newFeedback = req.body;
  let queryText = "";

  newFeedback = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments,
  ];

  queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);
  `;

  pool
    .query(queryText, newFeedback)
    .then((response) => {
      console.log(response);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`ERROR in POST /feedback:`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
