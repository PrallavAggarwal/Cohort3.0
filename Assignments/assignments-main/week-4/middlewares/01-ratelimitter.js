// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second



//app.use(timer)

let numberOfRequestsForUser = {
  users: []
};

function timer(req, res, next) {
  console.log("numberOfRequestsForUser : ", numberOfRequestsForUser)
  let userFound = false;
  try {
    let userId = req.ip;
    console.log("userId : ", userId)
    numberOfRequestsForUser.users.forEach((user) => {
      console.log("inside for each .")
      if (userId == user.id) {
        userFound = true;
        console.log("it matched.")
        let rem_time = Date.now() - user.start_time;
        console.log("::::::Details for the matched user:::::::")
        console.log(`id: ${user.id}`)
        console.log("Date now : ", Date.now())
        console.log(`Start Time: ${user.start_time}`)
        console.log(`Req Count: ${user.req_count}`);
        console.log(`Remain Time: ${rem_time}`);
        if (rem_time <= 1000 && user.req_count >= 5) {
          console.log("Kya bhai bots army h kya.")
          res.json({
            message: "no more request"
          })
          return;
        }
        else if (rem_time <= 1000 && user.req_count < 5) {
          user.req_count++;
          next();
          return;
        }
        else {
          user.start_time = Date.now();
          //user.req_count++;  it is not resetting the count of request.
          user.req_count = 1;
          next();
          return;
        }
      }
    })
    //user doesn't exist we have to create new user.
    req.user = numberOfRequestsForUser.users;
    if (!userFound) {
      let user = {};
      user.id = userId;
      user.start_time = Date.now();
      user.req_count = 1;
      numberOfRequestsForUser.users.push(user);
      console.log("outside for each.");
      console.log("user created : ", user)
      next();
    }
  }
  catch (error) {
    console.log("error while authenticating user.", error);
    res.json({
      error: error,
      message: "error while authenticating user."
    })
  };
}


// setInterval(() => {
//   numberOfRequestsForUser = {};
// }, 1000)

app.get('/info', timer, function (req, res) {
  console.log("next working. ")
  res.status(200).json({ users: req.user });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000)

// module.exports = app;
