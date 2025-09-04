const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
const JWT_SECRET = "yehSecretTokenHai";

//universal middlewares
app.use(express.json())
app.use(cors())
//tokens
function generateTokens() {
  const options = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  let token = "";
  for (let i = 0; i < options.length; i++) {
    token = token + options[Math.floor(Math.random() * options.length)];
  }
  return token;
}


//universal variables 
const user = [];

//other middlewares
function signup(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    console.log("u:", username);
    if (!user.filter(u => username === u.username)) {
      next();
    } else {
      user.push({
        username: username,
        password: password
      });
      res.json({
        message: "info saved successfully.",
        user: user,
      })
    }

  }
  catch (err) {
    res.json({
      Error: err,
      message: "error while adding info.",
    })
  }
}

function signin(req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    //check whether exist or not 
    console.log("username :", username, " password :", password)
    const userCheck = user.find(u => username === u.username && password === u.password);
    console.log("userCheck : ", userCheck);
    if (userCheck) {
      //const token = generateTokens();
      const token = jwt.sign({ username: username }, JWT_SECRET)
      user.forEach(element => {
        if (element.username == username) {
          element.token = token;
        }
      })
      res.json({
        token: token,
        message: "success.",
        user: user,
      })
    }
    else {
      next();
    }
  }
  catch (err) {
    res.json(
      {
        error: err,
      }
    )
  }

}


//routes 
app.post('/signup', signup, (req, res) => {
  try {
    res.json({
      message: "info exist in system."
    })
  }
  catch (err) {
    res.json({
      message: "Error occured. But info saved."
    })
  }
});

app.post('/signin', signin, (req, res) => {
  try {
    res.json({
      message: "user not exist.",
    })
  }
  catch (error) {
    res.json({
      Error: error,
    })
  }
});

app.get('/me', (req, res) => {
  const token = req.headers.cookie;
  const decodedUserName = jwt.verify(token, JWT_SECRET);
  const username = decodedUserName.username;
  //const check = user.find(u => u.token == token)
  const flag = user.find(u => u.username == username);
  if (flag) {
    res.json({
      user: flag,
    })
  }
  else {
    res.json({
      message: "can not provide info.",
    })
  }
})

app.listen(3000)
