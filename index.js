const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.end('/api/* to this server function with testKey: ' + process.env.TestKey);
});

app.get('/api', (req, res) => {
  res.end('Hello world');
});

app.get('api/createdb', (req, res) => {});

app.listen(PORT, () => {
  console.log('Listening' + PORT);
});
