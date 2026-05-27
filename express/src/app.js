import express from 'express';
const app=express();
import cors from 'cors';
import cookieParser from "cookie-parser";

app.use(cookieParser());
// app.use(cors({
//     origin:process.env.CLIENT_URL, 
//     credentials: true
// }));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

import authRoutes from "./routes/auth.routes.js";
app.use("/api/v1/auth",authRoutes);

import predictRoutes from "./routes/predict.routes.js";
app.use("/api/v1/predict",predictRoutes);

export default app;