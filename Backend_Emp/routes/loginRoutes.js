const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userData = require('../model/userData')
const adminData = require('../model/adminData')
const employeeData = require('../model/employeeData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

function verifyAdminToken(req,res,next){
    console.log(`req.headers - `)
    console.log(`${req.headers}`)
    console.log('Request Headers:', JSON.stringify(req.headers, null, 2));
    let adminToken = req.headers.admintoken;
    try{
        if(!adminToken) throw 'Unauthorized Access - no adminToken';
        let payload = jwt.verify(adminToken,'empApp');
        if(!payload) throw 'Unauthorized Access - no payload';
        next();
    } catch(error){
        res.json({message:error})
    }
}

router.get('/adminEmployees',verifyAdminToken, async(req,res)=>{
    try {
        const data = await employeeData.find()
        res.status(200).send(data)
        console.log(`Data from database is - ${data}`)
    } catch (error) {
        res.status(404).send(error)
    }
})

function verifyUserToken(req,res,next){
    console.log(`req.headers - `)
    console.log(`${req.headers}`)
    console.log('Request Headers:', JSON.stringify(req.headers, null, 2));
    let userToken = req.headers.usertoken;
    try{
        if(!userToken) throw 'Unauthorized Access - no userToken';
        let payload = jwt.verify(userToken,'empApp');
        if(!payload) throw 'Unauthorized Access - no payload';
        next();
    } catch(error){
        res.json({message:error})
    }
}

router.get('/userEmployees',verifyUserToken, async(req,res)=>{
    try {
        const data = await employeeData.find()
        res.status(200).send(data)
        console.log(`Data from database is - ${data}`)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router