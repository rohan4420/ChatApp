import mongoose from "mongoose"
const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((error)=>{
        console.log("Database failed to connect due to error")
    })
} 

export default connectDB;