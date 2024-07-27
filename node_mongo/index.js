const express = require("express");
const {connectMongoDB} = require("./connection");
const userRouter = require("./routes/user");
const { addNewLogEntry } = require("./middleware");

const app=express();

//connect monogo to node
connectMongoDB("mongodb://127.0.0.1:27017/test_users").then(()=>{console.log("Mongo connected Succesfully")});

//middleware
app.use(express.urlencoded({extended : false}));
app.use(addNewLogEntry('log.txt'));


app.use("/user" , userRouter);


//start server
app.listen(8000 , (err , data)=>{console.log("server started")});

