// Add code below to insert user info to your database
const {pool} = require('../../database/config/connection');

const postData = (username, location) => {
  return pool.query('INSERT INTO users (username, location) VALUES ($1, $2)', [
    username,
    location,
  ]);
};

module.exports = {postData};
