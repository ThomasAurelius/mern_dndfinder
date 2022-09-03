import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();



const corsOptions ={
    origin:'http://mern-dndfinder.vercel.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.options('*', cors())




app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, SIGNIN, SIGNUP, DELETE, PATCH, UPDATE, FETCH_ALL");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Authorization");
  next();
});



app.use("/posts", postRoutes);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

