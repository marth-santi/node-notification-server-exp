const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.end('Hello');
});

app.listen(8980, () => {
  console.log('Listening at 8980');
});
