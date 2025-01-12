import jwt from "jsonwebtoken"
const isAuthenticated = async(req,res,next) =>{
   try {
        const token = req.cookies.token;
        // console.log(token)
        if(!token){
            return res.status(400).json({
                message:"User not authenticated"
            })
        }
        const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY)
        // console.log(decode)
        if(!decode){
            return res.status(400).json({
                message:"Invalid token"
            })
        }
        req.id = decode.userId;
        next()
   } catch (error) {
        console.log(error)
   }
}
export default isAuthenticated