const express = require('express')
const app = new express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
const userData = require('./model/userData')
const adminData = require('./model/adminData')
const employeeData = require('./model/employeeData')
app.use(morgan('dev'))
require('dotenv').config()
require('./db/dbConnect')
const loginRoutes = require('./routes/loginRoutes')
const userRoutes = require('./routes/userRoutes')
const employeeRoutes = require('./routes/employeeRoutes')

app.use(morgan('dev'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/login',loginRoutes)
app.use('/user',userRoutes)
app.use('/emp',employeeRoutes)

app.get('/*',function(req,res){res.sendFile(path.join(__dirname,'/build/index.html'))})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT ${process.env.PORT}:`)
})