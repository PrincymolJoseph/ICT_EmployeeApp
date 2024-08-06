const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    username:String,
    password:String,
    phone:Number,
})
const adminData = mongoose.model('admin',adminSchema)
module.exports = adminData