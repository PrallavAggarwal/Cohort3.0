//  start writing your code from here

const { Router } = require("express");
const { User, Todo } = require('../database/index.js');
const userMiddleware = require("../middleware/user");
const Todorouter = Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
// const express = require('express');
// const app = express();
// app.use(express.json());

// todo Routes
Todorouter.post('/create', userMiddleware, async (req, res) => {
  // Implement todo creation logic
  let title = req.body.title;
  let description = req.body.description;
  let token = req.header('token');
  let decoded = jwt.verify(token, JWT_SECRET_KEY)
  let userid = decoded['userid'];
  console.log("decode data : ", decoded);
  console.log("userid : ", decoded['userid'])
  console.log("provided title : ", title);
  console.log("provided description : ", description)

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
  let date = new Date().toLocaleString();
  //Now add to database
  const done = await Todo.create({
    title: title,
    description: description,
    userid: userid,
    starttime: date,

  })
  //now since todo collection is updated with userid
  //so user collection for particular should be updated with todoid.
  //done._id  ::: isko user.todo[ yaha  ]  
  //const user = await User.findById(userid);
  //console.log("user fetched while adding todo. ", user);
  //now i wanna do user.todo.push(done._id);   /// but what will be the syntax for this ?
  try {
    await User.updateOne({ _id: userid }, { $push: { todo: done._id } })
    console.log("user updated with todo id.");
  }
  catch (error) {
    console.log("some error occured while adding todo to user schema.");
    console.log("ERROR :: ", error)
    return res.status(500).json({
      success: false,
      message: "error while saving todo to user schema.",
      error: error
    })
  }




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

Todorouter.put('/update', userMiddleware, async (req, res) => {
  // Implement update todo  logic
  let id = req.body.todoid;
  let title = req.body.title;
  let description = req.body.description;
  let token = req.header('token');
  let decoded = jwt.verify(token, JWT_SECRET_KEY)
  let userid = decoded['userid'];

  //check id empty or not 
  if (!id || !userid) {
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
  let user = await User.findById(userid)
  if (!user) {
    console.log("no user exist for this id.");
    return res.status(400).json({
      success: false,
      message: "no user for this id."
    })
  }
  let include = user.todo.includes(id);
  if (include) {
    try {
      if (title) {
        title = String(title);
        await Todo.findOneAndUpdate({ _id: id }, { title: title });
        console.log("title updated successfully.");

      }
      if (description) {
        description = String(description);
        await Todo.findOneAndUpdate({ _id: id }, { description: description })
        console.log("description updated successfully.");
      }
      return res.status(200).json({
        success: true,
        message: "details updated."
      })
    }
    catch (error) {
      console.log("error while updating title or description");
      return res.status(500).json({
        success: false,
        message: "title or description not updated due to server error.",
        error: error
      })
    }
  }
  else {
    console.log("user doesn't have this todo.")
    return res.status(400).json({
      success: false,
      message: "user don't have this todo."
    })
  }


}
);

Todorouter.delete('/delete', userMiddleware, async (req, res) => {
  // Implement delete todo logic
  try {
    let todoid = req.body.todoid;
    let token = req.header('token');
    let decoded = jwt.verify(token, JWT_SECRET_KEY)
    let userid = decoded.userid;

    if (!todoid) {
      console.log("todoid not present in req.body.");
      return res.status(400).json({
        success: false,
        message: "todoid not present. Can not delete todo."
      })
    }

    let todo = await Todo.findById(todoid);

    if (!todo) {
      console.log("no todo in db with mentioned id.");
      return res.status(400).json({
        success: false,
        message: "todo not present with this id in db. Can not delete todo."
      })
    }
    let deletedTodoUser = await User.findOneAndUpdate({ _id: userid }, { $pull: { todo: { _id: todoid } } });
    let deletedTodo = await Todo.findByIdAndDelete(todoid);
    console.log("deleted user : ", deletedTodoUser);
    console.log("deleted todo : ", deletedTodo);
    return res.status(200).json({
      success: true,
      message: "deleted todo."
    })

  } catch (error) {
    console.log("error while deleting todo.");
    return res.status(500).json({
      success: false,
      message: "error while deleting."
    })
  }
});

Todorouter.delete('/:id', userMiddleware, async (req, res) => {
  // Implement delete todo by id logic
  try {
    let todoid = req.params.id;
    if (!todoid) {
      console.log("todoid not present in req.body.");
      return res.status(400).json({
        success: false,
        message: "todoid not present. Can not delete todo."
      })
    }

    let todo = await Todo.findById(todoid);

    if (!todo) {
      console.log("no todo in db with mentioned id.");
      return res.status(400).json({
        success: false,
        message: "todo not present with this id in db. Can not delete todo."
      })
    }

    let deletedTodo = await Todo.findByIdAndDelete(todoid);
    let userid = deletedTodo.user;
    let deletedTodoUser = await User.findOneAndUpdate({ _id: userid }, { $pull: { todo: { _id: todoid } } });
    console.log("deleted user : ", deletedTodoUser);
    console.log("deleted todo : ", deletedTodo);
    return res.status(200).json({
      success: true,
      message: "deleted todo."
    })
  }
  catch (error) {
    console.log("error while deleting todo.");
    return res.status(500).json({
      success: false,
      message: "error while deleting."
    })
  }

});


Todorouter.get('/read', userMiddleware, async (req, res) => {
  // Implement fetching all todo logic
  let token = req.header('token');
  let decoded = jwt.verify(token, JWT_SECRET_KEY)
  let userid = decoded['userid'];

  if (!userid) {
    console.log("Can't find userid.");
    return res.status(400).json({
      success: false,
      message: "Can't find userid."
    })
  }


  let allTodos = await Todo.find({ userid: userid });
  console.log("alltodos : ", allTodos);
  return res.status(200).json({
    success: true,
    message: "found all todos.",
    todos: allTodos
  })
});
//
// router.get('/:id', adminMiddleware, (req, res) => {
//   // Implement fetching todo by id logic
// });
//
module.exports = Todorouter;
