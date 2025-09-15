//  start writing from here

const jwt = require('jsonwebtoken');

const { User } = require('../db/index.js')
const { success } = require('zod');
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  try {
    let token = req.header('token')
    console.log("vlaue of token from user. : ", token)
    let decodedData = jwt.verify(token, JWT_SECRET_KEY)
    console.log("decodedData in userMiddleware : ", decodedData)
    let userid = decodedData['userid'];
    console.log("decodedData.userid : ", decodedData['userid'])
    //check userid empty or not 
    if (!userid) {
      console.log("can not fetch userid.");
      return res.status(400).json({
        success: false,
        message: "userid is empty."
      })
    }

    //check userid in db or not
    console.log("checking in database.")
    try {
      let user = await User.findById(userid);
      console.log("user fetched according to userid in token : ", user)
      if (!user) {
        console.log("user not in our db.");
        return res.status(400).json({
          success: false,
          message: "user not found in our db."
        })
      }
      next();
    }
    catch (error) {
      console.log("errro while checking data base.")
      console.log("error : ", error)
      return res.status(500).json({
        success: false,
        message: "error while checking database.",
        error: error
      })
    }
  }
  catch (error) {
    console.log("Error while user authentication.");
    return res.status(500).json({
      success: false,
      message: "error while user authentication.",
      error: error
    })
  }
}

module.exports = userMiddleware;
