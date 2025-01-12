// business logic
import bcrypt from "bcryptjs"
import { User } from "../models/userModel.js"
import jwt from "jsonwebtoken"

export const register =async(req,res)=>{
    try {
        const {firstName, username,password,confirmPassword, gender} = req.body

        // all fileds are required
        if(!firstName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({
                message:"All fields are required"
            })
        }
        // to check password and confirmpassword
        if(password !== confirmPassword){
            return res.status(400).json({
                message:"password do not match"
            })
        }
        const user = await User.findOne({username})
        // check if present in existing db
        if(user){
            res.status(400).json({
                message:"Username already exist"
            })
        }
        // hashed user password 
        const hashedPassword = await bcrypt.hash(password,10)

        // profile photo[placeholder avatar]
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        await User.create({
            firstName, 
            username,
            password:hashedPassword,
            profilePhoto:gender==="male"?maleProfilePhoto:femaleProfilePhoto,
            gender
        })
        res.status(201).json({
            message:"User Created successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const login = async(req,res)=>{
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!username || !password){
            return res.satus(400).json({message:"All fields are required"})
        }
        if(!user){
            return res.status(400).json({
                message:"Incorrect username or password",
                success:false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)

        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Password Incorrect",
                success:false
            })
        }

        const tokenData = {userId:user._id}
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
            _id:user._id,
            firstName:user.firstName, 
            username:user.username,
            profilePhoto:user.profilePhoto
        })
    } catch (error) {
        console.log(error)
    }

}
export const logout = async(req,res)=>{
    try {
      return res.status(200).cookie("token","", {maxAge:0}).json({
        message:"Logged out succesfully"
      })  
    } catch (error) {
        console.log(error)
    }
}

export const getOtherUser = async (req, res) => {
    try {
        const loggedInUserID = req.id;

        // Find all users except the logged-in user and exclude the password field
        const otherUsers = await User.find({ _id: { $ne: loggedInUserID } }).select("-password");

        // Check if no users were found
        if (!otherUsers.length) {
            return res.status(404).json({ message: "No users found" });
        }

        return res.status(200).json(otherUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
