import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from './routes/auth.js';
import messageRoutes from "./routes/messageRoutes.js"; // 👈 ADD THIS MISSING IMPORT

const app = express();

app.use(cors());
app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`🚀 ${req.method} ${req.url}`);
  next();
});

ConnectDB();

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes); // 👈 Changed to "messages" (plural) to match your Dashboard axios calls
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log("☁️ Cloudinary Configured:", !!process.env.CLOUDINARY_API_KEY);
});