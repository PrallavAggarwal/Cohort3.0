const mongoose = require('mongoose');
console.log("inside db.");

//const course = require('./course');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  user_id: ObjectId,
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
})

const adminSchema = new Schema({
  admin_id: ObjectId,
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
})

const courseSchema = new Schema({
  course_id: ObjectId,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: ObjectId, ref: 'admin' }
})

const purchasesSchema = new Schema({
  purchase_id: ObjectId,
  course_id: { type: ObjectId, ref: 'course' },
  user_id: { type: ObjectId, ref: 'user' }
})

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchasesModel = mongoose.model('purchases', purchasesSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchasesModel
}
