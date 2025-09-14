//  start writing from here
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
require('dotenv').config();
const url = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(url);

// Define schemas

const UserSchema = new mongoose.Schema({
  // Schema definition here
  password: String,
  username: String,
  firstname: String,
  email: { type: String, unique: true },
  todo: [{ type: ObjectId, ref: 'Todo' }]
});

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  todoid: ObjectId,
  userid: { type: ObjectId, ref: 'User' },
  title: String,
  description: String,
  starttime: String,
  endtime: String,
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
  User,
  Todo
}
