const express = require("express");
const app = express();


app.get('/admin', (req, res) => {
  console.log("Route :", req.url);
  console.log("Method :", req.method);
  console.log("IP :", req.ip);
  console.log("Timestamp :", new Date());
  console.log("Hostname :", req.hostname);
  res.json({
    msg: "request sent successfully.",
  })
});

app.sendFile('../Landing Pages/');

app.listen(3000); 
