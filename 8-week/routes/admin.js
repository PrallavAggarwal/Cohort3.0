const { Router } = require('express');
const adminRoute = Router();
const { adminModel } = require('../db.js')

adminRoute.get('dashboard', (req, res) => {
  res.json({
    message: "dashboard will be available soon."
  })
});

adminRoute.post('/edit', (req, res) => {
  let name = req.body.name;
  let subject = req.body.subject;
  res.json({
    name: name,
    subject: subject,
    message: "your course will be added."
  })
});


module.exports = {
  adminRoute: adminRoute
}
