import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config(); // env ka maal process me patak de

const app = express();
app.use(express.json()); // we send all response in express json
app.use(cors()); // cross origin error if not use

app.use(postRoutes);
app.use(userRoutes);

app.use(express.static("uploads"))


const start = async () =>{
    
     const connectDB = await mongoose.connect(process.env.DATABASE_URL);

    app.listen(9090,()=>{
        console.log("Server is running on port 9090");
    })
}
start();
