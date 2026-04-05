import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from './routes/auth.js';
import messageRoutes from "./routes/messageRoutes.js"; 

const app = express();


app.use(express.json());

// Backend/server.js
app.use(cors({
  origin: [
    "http://localhost",
    "http://localhost:5173", 
    "https://emmanuelportfolio-nine.vercel.app" 
  ],
  credentials: true
}));

ConnectDB();

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes); 
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log("☁️ Cloudinary Configured:", !!process.env.CLOUDINARY_API_KEY);
});