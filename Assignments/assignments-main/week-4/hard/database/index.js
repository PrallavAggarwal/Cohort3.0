const mongoose = require('mongoose');
const ObjectId = mongoose.types.ObjectId;

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas

const UserSchema = new mongoose.Schema({
  // Schema definition here
  password: String,
  username: String,
  firstname: String,
  email: { type: email, unique: true },
  todo: [{ type: ObjectId, ref: 'Todo' }]
});

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  todoid: ObjectId,
  user: { type: ObjectId, ref: 'User' },
  title: String,
  description: String,
  starttime: Date,
  endtime: Date,
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
  User,
  Todo
}
