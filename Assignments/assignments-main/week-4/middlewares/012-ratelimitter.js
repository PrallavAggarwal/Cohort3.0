const express = require('express');
const app = express();

let numberOfRequestsForUser = { users: [] }
let count = 0;
let intervalStarted = false;
// function resetRequest() {
//   console.log(count++);
//   console.log(numberOfRequestsForUser)
//   numberOfRequestsForUser = { users: [] }
// }
//setInterval(resetRequest, 10000);

app.use((req, res, next) => {

  const userId = req.ip;
  if (!userId) {
    res.status(400).json({
      nmessage: 'user-id header is required'
    });
    return;
  }

  if (!intervalStarted) {
    setInterval(() => {
      console.log(count++);
      console.log(numberOfRequestsForUser)
      numberOfRequestsForUser = { user: [] }
    }, 10000);
    intervalStarted = true;
  }


  user = numberOfRequestsForUser.users.find(u => u.id === userId);
  const currentTime = Date.now();

  if (user) {
    if (user.requestCount >= 3 && (currentTime - user.lastRequest) < 10000) {
      console.log("::::::::::::::too many request:::::::::::::::::::::::::")
      res.status(429).json({
        message: "too many request."
      });
      return;
    }
    user.requestCount++;
    user.lastRequest = currentTime;
  } else {
    numberOfRequestsForUser.users.push({ id: userId, requestCount: 1, lastRequest: currentTime })
  }
  next();
});


app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Request accepted.' })
});

app.listen(3000, () => {
  console.log("app is listening at 3000");
})
