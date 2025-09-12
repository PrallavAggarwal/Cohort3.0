
//one way to seperate routes from index.js
//defining funcion and exporting it.
// function courseRoute(app) {
//   app.get('/course/preview', (req, res) => {
//     res.json({
//       message: "course preview route."
//     })
//   })
//   app.post('/course/info', (req, res) => {
//     let title = req.body.title;
//     res.json({
//       title: title,
//       price: 2000,
//       message: "course preview route."
//     })
//   })
//   app.get('/course/check', (req, res) => {
//     res.json({
//       message: "course route working good."
//     })
//   })
// }
//
// module.exports = {
//   courseRoute: courseRoute
// }

const { Router } = require('express');
const courseRoute = Router();
const { courseModel } = require('../db.js');

courseRoute.get('/info', (req, res) => {

});

courseRoute.get('/preview', (req, res) => {

})

courseRoute.get('/check', (req, res) => {

})

module.exports = {
  courseRoute: courseRoute,
}
