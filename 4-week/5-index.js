const express = require('express');

const app = express();

function ageVerifier(age) {
  if (age >= 14) {
    return true;
  }
  else {
    return false;
  }
}

function ageVerifierMiddleware(req, res, next) {
  if (req.query.age >= 14) {
    next();
  }
  else {
    res.status(411).json({
      msg: "You are under age."
    })
  }
}

app.get('/ride1', (req, res) => {
  if (ageVerifier(req.query.age)) {
    res.status(200).json({
      msg: "You have successfully completed the ride."
    })
  }
  else {
    res.status(411).json({
      msg: "you are not allowed."
    })
  }
})

app.get('/ride2', (req, res) => {
  if (ageVerifier(req.query.age)) {
    res.status(200).json({
      msg: "You have successfully completed the ride2."
    })
  }
  else {
    res.status(411).json({
      msg: "you are not allowed for ride2."
    })
  }
})
app.get('/ride3', ageVerifierMiddleware, (req, res) => {
  res.status(200).json({
    msg: "You have successfully completed the ride3."
  })
})
app.get('/ride4', ageVerifierMiddleware, (req, res) => {
  res.status(200).json({
    msg: "You have successfully completed the ride4."
  })
})


app.listen(3000);
