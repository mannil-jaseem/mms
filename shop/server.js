const express = require('express')
const app = express()

app.use(express.json())

const route = require('./routes/route.js')
app.use('/shop',route)

app.listen(3000,()=>console.log('3000'))