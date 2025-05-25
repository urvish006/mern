import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/mern";

const connectDB = async () => {
    try{
        await mongoose.connect(URI);
        console.log("MongoDB connected successfully");
    }catch(err){
        console.log("not connect");
    }
}

export default connectDB;