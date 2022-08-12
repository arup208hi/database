const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    EmployeeID: {
      type: Number,
      require: true,
    },
    EmployeeName: {
      type: String,
      require: true,
    },
    DOB: {
      type: Date,
      require: true,
    },
    Email: {
      type: String,
      require: true,
      unique: true,
    },
    PhoneNumber: {
      type: Number,
      require: true,
    },
    Street: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    State: {
      type: String,
      require: true,
    },
    Country: {
      type: String,
      require: true,
    },
    Pincode: {
      type: Number,
      require: true,
    },
  });
  
const Employee = new mongoose.model("Employee", employeeSchema);

module.exports = Employee;