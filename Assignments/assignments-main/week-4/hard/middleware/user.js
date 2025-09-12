function userMiddleware(req, res, next) {
  // Implement user auth logic
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    if (!email) {
      console.log("user email dena bhul gaya.");
      return res.json({
        message: "please give your email."
      })
    }
    if (!password) {
      console.log("user password dena bhul gaya.");
      return res.json({
        message: "please provide your passowrd."
      })
    }
  }



}

module.exports = userMiddleware;
