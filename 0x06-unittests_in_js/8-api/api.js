#!/usr/bin/node

/*
*Api
 */

const express = require('express');

const port = 7865;
const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.end('Welcome to the payment system');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865 ');
});
module.exports = app;