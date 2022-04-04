const user= require('../models/users');
const items= require('../models/items');
const store= require('../models/store');
const mongoose = require('mongoose') 


module.exports={
 
    find: async (m, f) => {
        return await mongoose.models[m].find(f).lean().exec() || null
    },
    update: async (m, f,u) => {
        return await mongoose.models[m].updateOne(f,{$set:u}).lean().exec() || null
    },
    create: async (m, f) => {
        return await mongoose.models[m].create(f) || null
    }
}


