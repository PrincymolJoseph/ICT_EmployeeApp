const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    id:String,
    name:String,
    email:String,
    address:{
        street:String,
        city:String,
        zipcode:String,
    },
    phone:String,
    designation:String,
    location:String,
    salary:Number,
})
const employeeData = mongoose.model('employee',employeeSchema)
module.exports = employeeData