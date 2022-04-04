const mongoose=require('mongoose');
const db = require('../database');
// create an schema
const users = new mongoose.Schema({
    userID:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    storeID:{
        type:Number,
        required:true
    },
    post:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model('users',users);
    