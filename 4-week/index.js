// const chalk = require("chalk");
// import chalk from "chalk";
// console.log(chalk.yellow("hello there"));

// const chalk = require("chalk");
// console.log(chalk.Chalk)

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  let num = req.query.n;
  res.send('hi there' + num);
})

app.listen(3001);
