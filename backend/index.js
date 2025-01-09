// const express = require("express");
import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database.js";

dotenv.config({})
const port = process.env.PORT || 8080
const app = express()

app.listen(port,(req,res)=>{
    connectDB()
    console.log(`Server running on port ${port}`)
})

