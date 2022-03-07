const express = require('express');
const {join} = require('path');
const app = express();
const router = require('./controllers');

const {pool} = require('./database/config/connection');

app.use(express.static(join(__dirname, '..', 'public')));

app.use(express.urlencoded({extended: false}));
pool.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

app.set('port', process.env.PORT || 5000);

app.use(router);

module.exports = app;
