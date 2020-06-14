const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.end('/api/* to this server function with port ' + PORT);
});

app.get('/api', (req, res) => {
  res.end('Hello world');
});

app.listen(PORT, () => {
  console.log('Listening' + PORT);
});
