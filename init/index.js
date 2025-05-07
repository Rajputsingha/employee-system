const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL=('mongodb://127.0.0.1:27017/EMS');
main().then(()=>{
    console.log("connect to the db");
  
  }).catch(err =>{
    console.log(err);
  })
  async function main(){
  await mongoose.connect(MONGO_URL);
  }
  const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);// Data  insert in monogodb
    console.log("data was initializerd");
  }
  initDB();