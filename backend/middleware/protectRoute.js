import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    // Check if the token exists in cookies
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized access - No Token Provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Fixed here
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized access - Invalid Token" });
    }

    // Find the user by decoded id
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {  // Fixed here (user, not User)
      return res.status(401).json({ message: "User not found" });
    }

    // Attach the user to the request object
    req.user = user;
    next();  // Continue to the next middleware or route handler
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

export default protectRoute;
