const { Router } = require('express');
const { userModel } = require('../db.js')

let userRoute = Router();

userRoute.get('/signup', (req, res) => {
  res.json({
    message: "signup route."
  })
})

userRoute.get('/signin', (req, res) => {
  res.json({
    message: "signin route."
  })
})


module.exports = {
  userRoute: userRoute
}
