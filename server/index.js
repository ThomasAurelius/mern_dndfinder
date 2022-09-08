import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();



const corsOptions ={
    origin:'https://shimmering-gnome-6c82a9.netlify.app', 
    // origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.options('*', cors())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, SIGNIN, SIGNUP, DELETE, PATCH, UPDATE, FETCH_ALL");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Authorization");
  next();
});



const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://dndfinder:dndfinder3451@cluster0.fzk8u.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);


app.use("/posts", postRoutes);
app.use("/user", userRouter);