const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userData = require('../model/userData')
const adminData = require('../model/adminData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/login',async(req,res)=>{
    
    const user = await userData.findOne({username:req.body.email});
    const admin = await adminData.findOne({username:req.body.email});
    // console.log('After findOne')
    if(!user && !admin){
        res.send({message:'User not found'})
    }else if(!admin){
        try {
            if(user.password===req.body.password){
                const payload={email:req.body.email,password:req.body.password}
                const token=jwt.sign(payload,'empApp')
                res.status(200).send({message:'User Login successful',userToken:token})
            }else{
                res.send({message:'User not found'})
            }
        } catch (error) {
            res.status(404).send(error)
        }
    }else{
        try {
            if(admin.password===req.body.password){
                const payload={email:req.body.email,password:req.body.password}
                const token=jwt.sign(payload,'empApp')
                res.status(200).send({message:'Admin Login successful',adminToken:token})
            }else{
                res.send({message:'User not found'})
            }
        } catch (error) {
            res.status(404).send(error)
        }
    }
})

module.exports = router