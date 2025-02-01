import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import GenerateToken from "../utils/GenerateToken.js";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, gender, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await userModel.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (gender !== "male" && gender !== "female") {
      return res.status(400).json({ message: "Invalid gender value" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new userModel({
      fullName,
      username,
      gender,
      password: hashedPassword,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      GenerateToken(newUser.id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid User" });
    }

    // console.log({ profilePic });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Username already exists" });
    }
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user =await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid cradentials" });
    }

    GenerateToken(user.id, res);
    // await new user.save();

    res.status(200).json({
      _id:  user.id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {

    try {
        res.clearCookie("token",{maxAge:0});    
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: error.message });
    }
//   console.log("logout route");
};
