import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import messsageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/connect.js";
import { app, io, server } from "./socket/socket.js"; 

// const app = express(); 

app.use(express.json());  
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messsageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connectDB();
});
