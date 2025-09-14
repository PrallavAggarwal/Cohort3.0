//  start writing your code from here

const { Router } = require("express");
const Userrouter = Router();
const userMiddleware = require("../middleware/user");
const { z } = require('zod');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Todo } = require('../database/index.js')
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// User Routes
Userrouter.post('/signup', async (req, res) => {
  // Implement user signup logic
  try {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    if (!email || !username || !password) {
      console.log("user missed some details while signing up");
      return res.status(400).json({
        success: false,
        message: "user missed some details while signing up."
      })
    }

    //schema for zod.
    const requiredBody = z.object({
      email: z.email(),
      password: z.string().min(8).max(50),
      username: z.string().min(3).max(50)
    })

    // let input = { email, username, password }
    const parsedBody = requiredBody.safeParse({ email: email, username: username, password: password });
    if (!parsedBody.success) {
      let prettyError = z.prettifyError(parsedBody.error);
      console.log("format of email || password || username is not correct.", prettyError);
      return res.status(400).json({
        success: false,
        message: "format of email || password || username is not correct.",
        error: prettyError
      })
    }


    //email exist in db or not 
    let result = await User.findOne({ email: email });
    if (result) {
      console.log("this email already exist. Better tell him to signin.");
      return res.status(400).json({
        success: false,
        message: "this email already exist. You better sign in or Use another email."
      })
    }

    //hash the password
    let hashedPassword = await bcrypt.hash(password, 4);

    //create entry in db 
    await User.create({
      password: hashedPassword,
      email: email,
      username: username
    });

    return res.status(200).json({
      success: true,
      message: "user entry created.",
    })
  }
  catch (error) {
    console.log("error while signing up.");
    res.status(500).json({
      success: false,
      message: "error while signing up."
    })
  }

});

Userrouter.post('/login', async (req, res) => {
  // Implement user login logic
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      console.log("user missed some details while signing up");
      return res.status(400).json({
        success: false,
        message: "user missed some details while signing up."
      })
    }

    //schema for zod.
    const requiredBody = z.object({
      email: z.email(),
      password: z.string().min(8).max(50),
    })

    let input = { email, password }
    const parsedBody = requiredBody.safeParse(input);
    if (!parsedBody.success) {
      let prettyError = z.prettifyError(parsedBody.error);
      console.log("format of email || password is not correct.", prettyError);
      return res.status(400).json({
        success: false,
        message: "format of email || password is not correct.",
        error: prettyError
      })
    }


    //email exist in db or not 
    let result = await User.findOne({ email: email });
    if (!result) {
      console.log("this email does not exist. Better tell him to sign up.");
      return res.status(400).json({
        success: false,
        message: "this email does not exist. You better sign up or Use another email."
      })
    }

    //compare hashedPassword 
    let passwordCorrect = bcrypt.compare(password, result.password);
    if (!passwordCorrect) {
      console.log("pwd incorrect.")
      return res.status(400).json({
        success: false,
        message: "pwd not correct"
      })
    }
    //generate token 
    const payload = {
      email: email,
      userid: result._id
    }

    let token = jwt.sign(payload, JWT_SECRET_KEY)
    console.log("token generated.", token);
    res.header("token", token);
    console.log("req.header : ", req.header)
    // console.log('req.header.token : ', req.header.token)
    // console.log("req.header('token')", req.header('token'));
    console.log("req.header['token']  : ", req.headers['token']);
    return res.status(200).json({
      success: true,
      message: "logged in success."
    })
  }
  catch (error) {
    console.log("error while logging in ", error)
    res.status(500).json({
      success: false,
      message: "error while loggin in. ",
      error: error
    })
  }

});

Userrouter.get('/todos', userMiddleware, async (req, res) => {
  try {
    // Implement logic for getting todos for a user
    let token = req.header('token');
    let decoded = jwt.verify(token, JWT_SECRET_KEY)
    let userid = decoded.userid;

    //check userid empty or not 
    if (!userid) {
      console.log("can not fetch userid.");
      return res.status(400).json({
        success: false,
        message: "userid is empty."
      })
    }

    //now fetch user from db 
    let user = await User.findById(userid)
    let todo = user.todo;
    console.log("todo fetched for user");
    return res.status(200).json({
      success: true,
      message: "todo fetched.",
      todo: todo
    })
  }
  catch (error) {
    console.log("todo not fetched. ", error);
    return res.status(500).json({
      success: false,
      message: "todo not fetched.",
      error: error
    })
  }
});


Userrouter.post('/logout', userMiddleware, (req, res) => {
  // Implement logout logic
  try {
    //delete tokens 
    res.header['token'] = null;
    //req.header('userid') = null;
    console.log("logged out success.")
    return res.status(200).json({
      success: true,
      message: "Logged out successfully."
    })
  } catch (error) {
    console.log("error in logging out.")
    return res.status(500).json({
      success: false,
      message: "error in logging out."
    })
  }
});

module.exports = Userrouter;
