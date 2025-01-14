// Import dependencies
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js"

import cookieParser from "cookie-parser";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
};

app.use(cors(corsOption));
// Connect to MongoDB
connectDB();

// Routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);



// Set the port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});
