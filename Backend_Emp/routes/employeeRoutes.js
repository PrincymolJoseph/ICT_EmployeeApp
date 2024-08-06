const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userData = require('../model/userData')
const adminData = require('../model/adminData')
const employeeData = require('../model/employeeData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/addEmployee',async(req,res)=>{
    try{
        console.log(req.body)
        var empItem = req.body
        var newEmp = new employeeData(empItem)
        await newEmp.save()
        res.status(201).send({message:'Employee Added!!!'})
    }catch(e){
        console.log(e)
    }
})

router.get('/employee/:emp', async(req,res)=>{
    const {emp} = req.params
    try {
        const employee = await employeeData.findOne({id:emp});
        console.log(`req.body.id(after await) from post /employee is - ${emp}`)
        if(employee){
            console.log(`Data from database is - ${employee}`)
            res.status(200).send(employee)
        }else{
            res.send({message:'Employee Not Present.'})
        }
        // res.status(201).send({message:'Employee Selected.'})
    } catch (error) {
        res.status(404).send(error)
    }
})

router.patch('/employee/:emp', async (req, res) => {
    const { emp } = req.params;
    console.log(req.body)
    var empItem = req.body
    try {
        const result = await employeeData.updateOne(
            {id:emp}, empItem, { new: true});
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // res.status(200).json(result);
        res.status(200).json({ message: 'Updated Employee!!!'});
    } catch (error) {
        res.status(400).json({ message: 'Error updating employee', error });
    }
});

router.delete('/employee/:emp', async (req, res) => {
    const { emp } = req.params;
    try {
        const result = await employeeData.deleteOne({id:emp});
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // res.status(200).json(result);
        res.status(200).json({ message: 'Deleted Employee!!!'});
    } catch (error) {
        res.status(400).json({ message: 'Error updating employee', error });
    }
});

module.exports = router