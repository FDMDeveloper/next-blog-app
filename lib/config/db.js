import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://francesco98:280998@cluster0.uepnhsl.mongodb.net/blog-app');
    console.log("DB Connected");
}