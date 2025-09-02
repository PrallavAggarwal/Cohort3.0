// AIM 
// 1.Create send backend API to frontend without cors.
// using fetch api.

// let a = document.getElementById("a").value;
// let b = document.getElementById("b").value;



const express = require("express");
const app = express();
app.use(express.json())

//getting file at '/' 
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// })

app.get('/sum', (req, res) => {
  let a = parseInt(req.body.a);
  let b = parseInt(req.body.b);
  let sum = a + b;
  console.log("sum : ", sum);
  res.json({
    sum: sum,
  });
})

app.listen(3001);
