const db = require('./db/dbConnect');
const Router = require('express-promise-router');
const fs = require('fs');

const router = new Router();

// Returns full PostgreSQL schema
router.get('/schema', async (req, res) => {
  const queryStr = fs.readFileSync('server/db/schema.sql', 'utf8');
  const { rows } = await db.query(queryStr);
  res.status(200).send(rows);
});

module.exports = router;
