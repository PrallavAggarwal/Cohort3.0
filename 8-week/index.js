const express = require('express');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = express();
const { userRoute } = require('./routes/user.js')
const { adminRoute } = require('./routes/admin.js')
const { courseRoute } = require('./routes/course.js');

// courseRoute(app);


app.use('/api/v1/user', userRoute);
app.use('api/v1/admin', adminRoute);
app.use('/api/v1/course', courseRoute);

async function main() {
  require('dotenv').config();
  let url = process.env.DB_URL;
  console.log(url)
  await mongoose.connect(url);
  console.log("database connected successfully.")
  app.listen(3000);
  console.log("app listening on port 3000.")
}


main();
