const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://node-notification-exp.herokuapp.com:8980/');
});

app.get('/api', (req, res) => {
  res.end('Hello');
});

app.listen(8980, () => {
  console.log('Listening at 8980');
});
