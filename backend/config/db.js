import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose.connect('mongodb+srv://abhishek:Abhishek83@cluster0.q6brchf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
