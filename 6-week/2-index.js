const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Asus";
const app = express();
app.use(cors());
app.use(express.json())
const users = [];

//signup
function signup(req, res, next) {
  try {
    //fetch username and password from request.
    const username = req.body.username;
    const password = req.body.password;

    //verify whether it already exist or not
    const usernameCheck = users.find(u => u.username == username);
    const passwordCheck = users.find(u => u.password == password);
    if (usernameCheck || passwordCheck) {
      console.log("username or password is same. Both must be unique.");
      res.json({
        message: "username or password is same. Both must be unique.",
        success: false,
      })
    }
    else {
      users.push({
        username: username,
        password: password
      });
      let len = users.length - 1;
      console.log("your detail stored.");
      res.json({
        message: "your detail stored.",
        user: users[len],
      })
    }
  }
  catch (error) {
    console.log("Error occured in signup middleware.")
    console.log("Error: ", error);
    res.json({
      message: "Error occured in signup middleware.",
      error: error,
    })
  }
}


//signin 
function signin(req, res, next) {
  try {
    //fetch username and password from request.
    const username = req.body.username;
    const password = req.body.password;
    //verify whether exist or not 
    let flag = false;
    let num = 0;
    users.forEach((user, index) => {
      if (user.username == username && user.password == password) {
        flag = true;
        num = index;
      }
    })
    if (!flag) {
      console.log("Incorrect details or User not exist.");
      res.json({
        message: "Incorrect details or User not exist.",
      })
    }
    //generate token and attach it with user detail.
    const token = jwt.sign({ username: username }, JWT_SECRET);
    users[num].token = token;
    //send response showing user detail.
    console.log("User exist in our system.");
    res.json({
      message: "Correct details.",
      user: users[num],
    })
  }
  catch (error) {
    console.log("Error occured while signing in.");
    console.log("Error: ", error);
    res.json({
      message: "Error occured while signing in.",
      error: error,
    })
  }
}


//me 
function me(req, res, next) {
  try {
    //fetch token from request header and verify
    const token = req.headers.token;
    const verify = jwt.verify(token, JWT_SECRET);
    const username = verify.username;
    //send user details 
    users.forEach(user => {
      if (user.username == username) {
        res.json({
          message: " yeh teri info.",
          info: user,
        })
      }
    })
  }
  catch (error) {
    console.log("Error occured while sending me info.");
    console.log("Error: ", error);
    res.json({
      message: "Error occured while sending me info.",
      error: error,
    })
  }

}


app.post('/signup', signup, (req, res) => {
  console.log("inside signup end route.");
  res.json({
    message: "inside signup end route."
  })
})

app.post('/signin', signin, (req, res) => {
  console.log("inside signin end route.");
  res.json({
    message: "inside signin end route."
  })
})

app.get('/me', me, (req, res) => {
  console.log("inside me end route.");
  res.json({
    message: "inside me end route."
  })
})

app.listen(3001);
