const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
});

app.get('/api', (req, res) => {
  res.end('Hello');
});

app.listen(80, () => {
  console.log('Listening at 8980');
});
