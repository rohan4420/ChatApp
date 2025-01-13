// Import dependencies
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js"
import cors from "cors"

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

app.use(cors())
// Middleware for parsing JSON
app.use(express.json());

// to get cookies from api
app.use(cookieParser())

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
