import mongoose from "mongoose";

// created a model with timestamp for user with repective fields
const userModel = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        require:true
    }
},{timestamps:true})

export const User = mongoose.model("User",userModel)