// Add code below to get users info from your database
const {pool} = require('../../database/config/connection');
const getData = () => {
  return pool.query('SELECT * FROM users');
};

module.exports = {getData};
