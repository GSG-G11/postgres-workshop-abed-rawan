const {pool} = require('../config/connection');

const deleteUser = id => {
  return pool.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = {deleteUser};
