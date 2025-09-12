const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { User, Todo } = require('../database/index.js')
const router = Router();

// todo Routes
router.post('/create', async (req, res) => {
  // Implement todo creation logic
  let title = req.body.title;
  let description = req.body.description;
  let userid = req.header('userid');

  //check whether empty or not 
  if (!title || !description || !userid) {
    console.log("User either not provided title or description");
    return res.status(400).json({
      success: false,
      message: "must provide both title and description"
    })
  }

  //Now title and description are not empty 
  //convert them to string 
  title = String(title);
  description = String(description);
  let todo = {
    title,
    description,
    userid
  }

  //Now add to database
  const done = await Todo.create({
    title: title,
    description: description,
    userid: userid,
    starttime: new Date().now().toLocaleString(),

  })
  //now since todo collection is updated with userid
  //so user collection for particular should be updated with todoid.
  //done._id  ::: isko user.todo[ yaha  ]  
  if (done) {
    console.log("todo entry in db created.")
    return res.status(200).json({
      success: true,
      message: "todo saved successfully.",
      todo: done,
    })
  } else {
    console.log("todo entry not created in db.")
    return res.status(500).json({
      success: false,
      message: "not saved in db."
    })
  }
});

router.put('/update', adminMiddleware, (req, res) => {
  // Implement update todo  logic
  let id = req.body.todoid;
  let title = req.body.title;
  let description = req.body.description;
  let userid = req.header('userid')
  //check id empty or not 
  if (!id && !userid) {
    console.log("user gave empty id to update todo.");
    return res.status(400).json({
      success: false,
      message: "must give id for todo."
    })
  }
  if (!title && !description) {
    console.log("user missed both title and description while updating.");
    return res.status(400).json({
      success: false,
      message: "must give either title or description."
    })
  }

  //now id is not empty and we have title or description.
  let user = await User.findOne({
    todo: id,
  })
  if (!user) {
    console.log("no user exist for this id.");
    return res.status(400).json({
      success: false,
      message: "no user for this id."
    })
  }
  if (title) {
    title = String(title);


  }
  title = String(title);
  description = String(description);


});

router.delete('/delete', adminMiddleware, (req, res) => {
  // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
  // Implement delete todo by id logic
});


router.get('/read', adminMiddleware, (req, res) => {
  // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
  // Implement fetching todo by id logic
});

module.exports = router;
