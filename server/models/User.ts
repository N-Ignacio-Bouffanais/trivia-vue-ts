import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  avatar:{
    type: Number,
    required: true
  }
});

export default model('User', userSchema)