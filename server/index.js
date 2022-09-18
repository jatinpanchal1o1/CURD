import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import PostRouter from "./routes/postRou.js";

//express server .....
const port = process.env.PORT || 8000;
const app = express();
//middel ware .....
app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use(cors());
app.use("/post", PostRouter);

//mongo db cloud connection ......
const Connect_URL = "mongodb+srv://data1:data1@data1.iappk7g.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(Connect_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(port, ()=>console.log(`DB is connected at ${port}`)))
.catch((err)=>{
    return console.log(`Somthing want wrong: ${err.message}`)
});

