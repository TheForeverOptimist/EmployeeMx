require('../config/connection');

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
{
        name:String,
        image:String,
        department:String,
        position:String,
        salary:String

})
const Employee = mongoose.model('empCollection', employeeSchema);

module.exports = Employee
