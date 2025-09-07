const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'kisiKoNhiBatana';
const { UserModel, TodoModel } = require('./db.js');
const { z } = require('zod');
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://shinchan1990n:HT0kig9bCgKkb9NJ@cluster0.zvf7zhv.mongodb.net/1-TODO')

app.post('/signup', async (req, res) => {
  //describe your schema to zod.
  //body = {
  //email:string,
  //password:string,
  //name:string
  //} ::::::::: can also add other restrictions.
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(100)
  });
  const parsedData = requiredBody.safeParse(req.body); //it will also return the type of error occured. that can be displayed to user.
  console.log("parsed Data :", parsedData);
  if (!parsedData.success) {
    console.log("Error by user: ", parsedData.error);
    res.status(403).json({
      message: "invalid format",
      error: parsedData.error
    })
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const hashedPassword = await bcrypt.hash(password, 4);
  console.log("hashed password : ", hashedPassword);
  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name
  })

  res.json({
    message: "You are SIGNED UP."
  })
});

app.post('/signin', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  })
  if (!user) {
    res.status(403).json({
      message: "Wrong Email."
    });
    return;
  }
  console.log("user : ", user);

  //compare if password is correct or not
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (passwordMatched) {
    const payload = { id: user._id };
    const token = jwt.sign(payload, JWT_SECRET);
    res.header('token', token);
    res.status(200).json({
      message: "Logged in success.",
      name: user.name,
      email: user.email
    })
  } else {
    res.status(403).json({
      message: "invalid credentials."
    })
  }

})

app.post('/todo', auth, async (req, res) => {
  const userId = req.userId;
  const done = req.body.done;
  const title = req.body.title;
  const todo = await TodoModel.create({
    userId: userId,
    title: title,
    done: done
  });
  if (todo) {
    res.status(400).json({
      message: "Todo created successfully.",
      todo: todo
    })
  }
  else {
    res.status(403).json({
      message: "can not create todo."
    })
  }

})

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "invalid credentials."
    })
  }
}

app.post('/todos', (req, res) => {

})

app.get('/', (req, res) => {
  try {
    res.send(`<h1> welcome to TODO </h1>`);
  } catch (error) {
    console.log("Error : ", error);
    res.send(`<h1>Sorry some error occured</h1>`)
  }
})

app.listen(3000);
