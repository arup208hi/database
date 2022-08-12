const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/employee-details")
.then(() => {
  console.log("connection successful.....");
})
.catch((err) => {
  console.log(err);
});