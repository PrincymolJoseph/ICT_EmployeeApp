const express = require('express')
const app = new express()
const morgan = require('morgan')
const cors = require('cors')
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



// app.get('/',async(req,res)=>{
//     try {
//         const data = await blogData.find()
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send(err)
//     }
// })

// app.post('/',async(req,res)=>{
//     try{
//         console.log(req.body)
//         var blogItem = {
//             blogTitle:req.body.blogTitle,
//             blogPost:req.body.blogPost,
//             blogImg:req.body.blogImg,
//             blogDate:req.body.blogDate
//         }
//         var newBlog = new blogData(blogItem)
//         await newBlog.save()
//         res.status(201).json(blogItem)
//     }catch(e){
//         console.log(e)
//     }
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT ${process.env.PORT}:`)
})