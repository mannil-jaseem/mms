var express = require('express');
var app= express()

app.use(express.json())
var route = require('./routes/route')
app.use('/pm',route)

app.listen(4000,()=>console.log('4000'))    