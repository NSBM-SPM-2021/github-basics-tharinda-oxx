const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
     host:"localhost",
     user:"root",
     password:"admin",
     database:"employee_system"
});
    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get", (req,res)=>{
    const sqlSelect="SELECT * FROM employee";
    db.query(sqlSelect, (err,result)=>{
        res.send(result);
        console.log(result);
    });
});
    
app.post("/api/insert", (req, res) =>{

       const full_name = req.body.full_name;
       const name_with_in = req.body.name_with_in;
       const birth_day = req.body.birth_day;
       const age = req.body.age;
       const address = req.body.address;
       const city = req.body.city;
       const telephone_no = req.body.telephone_no;
       const email =req.body.email;
       const department = req.body.department;
       const job_roll = req.body.job_roll;

    const sqlInsert = "INSERT INTO employee(full_name,name_with_in,birth_day,age,address,city,telephone_no,email,department,job_roll)VALUES(?,?,?,?,?,?,?,?,?,?);";
    db.query(sqlInsert, [full_name,name_with_in,birth_day,age,address,city,telephone_no,email,department,job_roll],(err, result )=>{
        console.log(result);
    });
   
});
app.delete('/api/delete/:id',(req,res)=>{
    const deleteEmployee = req.params.id;
    const sqlDelete = "DELETE FROM employee WHERE id=?;";
    db.query(sqlDelete,deleteEmployee,(err,result) => {
             if (err) console.log(err);
    });
});

app.listen(3002,() => {
    console.log("Running on port 3002");
});
