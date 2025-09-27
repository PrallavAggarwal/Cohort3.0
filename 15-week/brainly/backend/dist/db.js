import mongoose from "mongoose";
import { model, Schema } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DBURL);
// mongoose.connect(process.env.DBURL)
const UserModel = new Schema({
    firstname: { type: String, require: true },
    secondname: { type: String, require: true }
});
export const userModel = model('user', UserModel);
//# sourceMappingURL=db.js.map