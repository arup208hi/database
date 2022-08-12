const mongoose = require("mongoose");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

require("./db/conn");
const Employee = require("./schema");

const EmployeeDetails = async () => {
  try {
    const Employee1 = new Employee({
      EmployeeID: 123565,
      EmployeeName: "Abir Chatterjee",
      DOB: 29 - 03 - 2001,
      Email: "abir123@gmail.com",
      PhoneNumber: 12345678,
      Street: "Rabindra sarani",
      city: "Kolkata",
      State: "West Bengal",
      Country: "India",
      Pincode: 700126,
    });

    const Employee2 = new Employee({
      EmployeeID: 125487,
      EmployeeName: "Rahul Sinha",
      DOB: 19 - 06 - 2005,
      Email: "rahul123@gmail.com",
      PhoneNumber: 12344678,
      Street: "Chadni Market",
      city: "Delhi",
      State: "Delhi",
      Country: "India",
      Pincode: 700121,
    });

    const Employee3 = new Employee({
      EmployeeID: 164565,
      EmployeeName: "Rohit Sharma",
      DOB: 07 - 01 - 1991,
      Email: "rohit123@gmail.com",
      PhoneNumber: 12487678,
      Street: "Marin Drive",
      city: "Mumbai",
      State: "Maharastra",
      Country: "India",
      Pincode: 700131,
    });

    const Employee4 = new Employee({
      EmployeeID: 1232225,
      EmployeeName: "k. Swami",
      DOB: 29 - 03 - 2000,
      Email: "swami123@gmail.com",
      PhoneNumber: 45445678,
      Street: "Chenna Thala",
      city: "Chennai",
      State: "Tamilnadu",
      Country: "India",
      Pincode: 700125,
    });

    const Employee5 = new Employee({
      EmployeeID: 165565,
      EmployeeName: "Murli Dharan",
      DOB: 29 - 03 - 1991,
      Email: "murli123@gmail.com",
      PhoneNumber: 19745678,
      Street: "Royal British",
      city: "Bengalore",
      State: "Karnataka",
      Country: "India",
      Pincode: 701126,
    });

    const Employee6 = new Employee({
      EmployeeID: 123578,
      EmployeeName: "Ali mohommad",
      DOB: 29 - 10 - 2001,
      Email: "ali123@gmail.com",
      PhoneNumber: 12255678,
      Street: "Sahi Biriyani Road",
      city: "hydrabad",
      State: "Telengana",
      Country: "India",
      Pincode: 700176,
    });

    const Employee7 = new Employee({
      EmployeeID: 126565,
      EmployeeName: "Sir Abdul Kalam",
      DOB: 29 - 03 - 1992,
      Email: "abdul123@gmail.com",
      PhoneNumber: 95745678,
      Street: "Abdul Marg",
      city: "Kochi",
      State: "Kerala",
      Country: "India",
      Pincode: 711126,
    });

    const Employee8 = new Employee({
      EmployeeID: 123159,
      EmployeeName: "Motabhai Patel",
      DOB: 29 - 03 - 1901,
      Email: "motabhai123@gmail.com",
      PhoneNumber: 12235678,
      Street: "Sardar Patel Road",
      city: "Ahmedabad",
      State: "Gujrat",
      Country: "India",
      Pincode: 770126,
    });

    const Employee9 = new Employee({
      EmployeeID: 1475238,
      EmployeeName: "Rahul Tiwatia",
      DOB: 01 - 03 - 2001,
      Email: "tiwatia123@gmail.com",
      PhoneNumber: 12184678,
      Street: "Haya Mehal Road",
      city: "Jaipur",
      State: "Rajastan",
      Country: "India",
      Pincode: 712326,
    });

    const Employee10 = new Employee({
      EmployeeID: 123852,
      EmployeeName: "Raja Sardar",
      DOB: 29 - 03 - 1971,
      Email: "raja123@gmail.com",
      PhoneNumber: 12283678,
      Street: "Kashmir Vally",
      city: "Jammu",
      State: "jammu & Kashmir",
      Country: "India",
      Pincode: 704586,
    });

    const list = await Employee.insertMany([
      Employee1,
      Employee2,
      Employee3,
      Employee4,
      Employee5,
      Employee6,
      Employee7,
      Employee8,
      Employee9,
      Employee10,
    ]);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};
EmployeeDetails();

app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
