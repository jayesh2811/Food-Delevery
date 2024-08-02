import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://food:OEyAwMPWJJdmyBJL@cluster0.zm9pqib.mongodb.net/food-del').then(() => console.log("DB connected"));
}