const express = require("express");

const router = express.Router()
const con = require('../controllers/controller')

router.post('/find', async (req, res)=> {
    res.json( await con.find(req.body.m,req.body.f))

    
    
});

router.post('/update', async (req, res)=> {
    res.json( await con.update(req.body.m,req.body.f,req.body.u))

    
});

router.post('/save', async (req, res)=> {
    let item={name:req.body.name,storeID:req.body.id,price:req.body.price}
    res.json( await con.create(req.body.m,item))

    
});

module.exports=router   