const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const listingSchema = new Schema({
  name: String,
  email: String,
  position: String,
  department: String,
  salary: Number,
});


const Listing = mongoose.model('listing', listingSchema);
 module.exports=Listing;