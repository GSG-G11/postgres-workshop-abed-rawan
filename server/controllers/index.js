const express = require('express');
const users = require('./static');
const app = require('../app');

const router = express.Router();

const {getData} = require('../database/queries/getData');
const {postData} = require('../database/queries/postData');
const {deleteUser} = require('../database/queries/deleteUser');

router.get('/users', (req, res) => {
  getData().then(data => {
    res.send(data.rows);
  });
});

router.post('/create-user', (req, res) => {
  const {name, location} = req.body;

  if (!name || !location) {
    return res.status(400).json({
      error: 'Please provide a name and location',
    });
  }

  postData(name, location).then(data => {
    res.status(201).redirect('/');
  });
});

router.delete('/users/:id', (req, res) => {
  const id = +req.params.id;

  if (!id) {
    return res.status(400).json({
      error: 'Please provide a valid id',
    });
  }
  deleteUser(id).then(data => {
    res.status(204).redirect('/');
  });
});

module.exports = router;
