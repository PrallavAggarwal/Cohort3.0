import mongoose from "mongoose";
import { model, Schema } from 'mongoose';
import * as dotenv from "dotenv";
// import 'dotenv/config';
dotenv.config()
console.log(process.env.DBURL);
let url = process.env.DBURL
import { DBURL } from "./config.js";
await mongoose.connect(url)


const UserModel = new Schema({
  firstname: { type: String, require: true },
  secondname: { type: String, require: true }
})

const ContentModel = new Schema({
  title: String,
  content: String,
  link: String,
  userId: { type: mongoose.Types.ObjectId, ref: 'user' },
  tags: [{ type: mongoose.Types.ObjectId, ref: 'tag' }]
})

const TagModel = new Schema({
  title: String,
})

export const userModel = model('user', UserModel);
export const contentModel = model('content', ContentModel);
export const tagModel = model('tag', TagModel)
