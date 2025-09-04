// AIM 
// 1.Create send backend API to frontend without cors.
// using fetch api.

// let a = document.getElementById("a").value;
// let b = document.getElementById("b").value;



const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors());

const plantData = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    commonName: "Swiss Cheese Plant",
    type: "Tropical",
    light: "Bright Indirect",
    water: "Weekly",
    temperature: {
      min: 18,
      max: 27,
      unit: "Celsius"
    },
    humidity: "High",
    growthRate: "Moderate",
    careLevel: "Medium",
    isToxic: true,
    price: 25.99,
    inStock: true
  },
  {
    id: 2,
    name: "Ficus Lyrata",
    commonName: "Fiddle Leaf Fig",
    type: "Tree",
    light: "Bright Indirect",
    water: "Bi-weekly",
    temperature: {
      min: 15,
      max: 24,
      unit: "Celsius"
    },
    humidity: "Moderate",
    growthRate: "Slow",
    careLevel: "High",
    isToxic: true,
    price: 45.50,
    inStock: false
  },
  {
    id: 3,
    name: "Sansevieria",
    commonName: "Snake Plant",
    type: "Succulent",
    light: "Low to Bright",
    water: "Monthly",
    temperature: {
      min: 10,
      max: 30,
      unit: "Celsius"
    },
    humidity: "Low",
    growthRate: "Slow",
    careLevel: "Easy",
    isToxic: false,
    price: 15.75,
    inStock: true
  }
];

//getting file at '/' 
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// })

app.post('/sum', (req, res, next) => {
  try {
    console.log("Inside /sum ");
    console.log("Request : ", req.body);
    console.log("a = ", req.body.a);
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let sum = a + b;
    console.log("sum : ", sum);
    res.json({
      sum: sum,
    });

  }
  catch (error) {
    console.log("Error : ", error);
    res.json({
      error: error,
    })
  }
})

app.get('/plantData', (req, res) => {
  console.log("INside plantData .");
  res.json({
    plants: plantData,
  })
})

app.post('/messages', (req, res) => {
  try {
    console.log("Body : ", req.body)
    let id = parseInt(req.body.id);
    console.log("id :", id);
    res.json({
      message: `your id is ${id}`,
    })
  }
  catch (error) {
    console.log("Error : ", error);
    res.json({
      error: error,
    })
  }
})

app.listen(3001);
