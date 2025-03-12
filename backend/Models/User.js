const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
   _id:mongoose.Schema.Types.ObjectId,
  fullName:{type:String,require:true},
  about:{type:String,require:true},
  email:{type:String,require:true},
  phone:{type:String,require:true},
  password:{type:String,require:true},
  experience:{type:String,require:true},
  qualification:{type:String,require:true},
  logoUrl:{type:String,require:true},
  logoId:{type:String,require:true},
   
},{timestamps:true})

module.exports = mongoose.model('userd',userschema);