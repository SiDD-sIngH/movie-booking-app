import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);
mongoose
.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.dttnokp.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>
app.listen(5000,()=>
console.log("connected to databse and sever"))
)
.catch((e)=>console.log(e));

