require('../config/connection');

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
{
        engine:String ,
        power:String,
        topSpeed:String,
        color:String,
        name:String,
        model:String,
        year:String 
})
const Employee = mongoose.model('empCollection', employeeSchema);

module.exports = Employee
