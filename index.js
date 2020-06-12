const express = require('express');
const https = require('https');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
});

app.get('/api', (req, res) => {
  res.end('Hello');
});

https.createServer(app).listen(PORT, () => {
  console.log('Listening');
});
