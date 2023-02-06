const express = require('express');
const app = express();

const querystring = require('querystring');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const redirect_uri = 'http://localhost:3000/callback/'; 



app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
