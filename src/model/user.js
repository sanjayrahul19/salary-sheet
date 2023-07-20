import mongoose from "mongoose";

const user = new mongoose.Schema({
name:{
  type:String,
  required:true
},
email:{
  type:String,
  required:true
},
password:{
  type:String,
  required:true
}
},{versionKey:false});

export const User=mongoose.model("user",user)
