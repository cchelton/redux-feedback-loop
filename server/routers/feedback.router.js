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

module.exports = router;
