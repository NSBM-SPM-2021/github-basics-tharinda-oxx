const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
     host:"localhost",
     user:"root",
     password:"admin",
     database:"employee_system"
});

app.get("/", (req, res) =>{
    const sqlInsert = "INSERT INTO employee(full_name,name_with_in,birth_day,age,address,city,telephone_no,email,department,job_roll)VALUES('test1','Test2','1998-06-24',23,'aaaaaa','city','0716727703','test@gmail.com','HR','HRM');";
    db.query(sqlInsert,(err, result )=>{
        res.send(result);
    });
   
});

app.listen(3002,() => {
    console.log("Running on port 3002");
});
