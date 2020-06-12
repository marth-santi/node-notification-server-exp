const express = require('express');
const https = require('https');
const http = require('http');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
});

app.get('/api', (req, res) => {
  res.end('Hello');
});

http.createServer(app).listen(80);
https.createServer(app).listen(443);
