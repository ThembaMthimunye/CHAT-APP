// import express from "express";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import messsageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/connect.js";
// import cors from "cors"



const app = express();
// app.use(cors());
app.use(express.json());  //for req.body
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messsageRoutes);
app.use("/api/users", userRoutes);


// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connectDB();
});
