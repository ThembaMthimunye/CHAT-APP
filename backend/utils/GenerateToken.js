import jwt from "jsonwebtoken";

const GenerateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

res.cookie("jwt", token, {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  httpOnly: true, //Prevents xxs attacks cross site scripting
  sameSite: "strict",
  secure:process.env.NODE_ENV === "production" ? true : false,
});
};
export default GenerateToken;
