const express=require("express");
const app=express();
const cors=require('cors');
const mongoose = require('mongoose');
const MONGO_URL=('mongodb://127.0.0.1:27017/EMS');
const Listing=require("./models/listing.js");
const path=require("path");

app.use(express.static(path.join(__dirname,'../ems/build')));
app.use(cors());
app.use(express.json());
main().then(()=>{
    console.log("connect to the db");
  
  }).catch(err =>{
    console.log(err);
  })
  async function main(){
  await mongoose.connect(MONGO_URL);
  }


app.get("/message",(req,res)=>{
    res.json({
        message:"Hello form everyone"
    });

})
app.get("/*path",(req,res)=>{
    res.sendFile(path.join(__dirname,'../ems/build','index.html'));
})

app.listen((8080),()=>{
    console.log("app listen to the server");
})