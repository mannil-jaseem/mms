

const mongoose=require('mongoose');
const db = require('../database');

const items = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    storeID:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})



module.exports = mongoose.model('items',items)