const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL;

app.use(express.json());

app.get("/healthy", (req, res) => res.send("I am Healthy"));

//  start writing your routes here



async function main() {
  try {
    await mongoose.connect(url);
    console.log("DB connected successfully.");
    app.listen(port);
    console.log("app listening to port ", port);
  }
  catch (error) {
    console.log("Elrror while listening to port.");
  }
}

main();
