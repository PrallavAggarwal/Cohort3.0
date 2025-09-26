const { Router } = require('express');
const { userModel } = require('../db.js');
const { success } = require('zod');

let userRoute = Router();

userRoute.get('/signup', async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  let user = await userModel.findOne({
    email: email,
    password: password,
  })

  if (user) {
    return res.status(200).json({
      success: false,
      message: "user already exist."
    })
  }

  await userModel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname
  })

  if (user) {
    res.status(200).json({
      success: true,
      message: "user signed up successfully."
    })
  }
  res.json({
    message: "signup route."
  })
})

userRoute.get('/signin', (req, res) => {
  res.json({
    message: "signin route."
  })
})

userRoute.get('/purchases', (req, res) => {
  res.json({
    message: "purchases route."
  })
})

module.exports = {
  userRoute: userRoute
}
