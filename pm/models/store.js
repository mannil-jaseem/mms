const mongoose=require('mongoose');
const db = require('../database');

const store = new mongoose.Schema({
    storeID:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('store',store)