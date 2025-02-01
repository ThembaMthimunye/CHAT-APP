import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_URI);
        console.log("Database connected");
    } catch (error) {
     console.log("Error connecting to database",error.message);   
    }
}
export default connectDB;