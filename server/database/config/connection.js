require('env2')('./config.env');

const {Pool} = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

module.exports = {pool};
