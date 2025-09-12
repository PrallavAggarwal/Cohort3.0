//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
  // write the logic for request log here
  let log = {
    url: req.url,
    method: req.method,
    date: new Date().toISOString(),
    ip: req.ip,
    device: req['sec-ch-ua-platform']
  }
  console.log(log);
  //console.log(req);
}

app.use(logRequests);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.listen(2000)
module.exports = app;
