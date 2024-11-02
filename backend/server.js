// configure env variables
require("dotenv").config()


// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Student = require("./models/student");

// Create express app
const app = express();

// configure express app
app.use(express.json())

// connecting to database
connectToDb();

// Routes
app.get("/", (req, res) => {
    // business logic
    res.json({"message": "Hello World", "status": "success"});
})

// POST api to insert document in student collection
app.post("/students", async (req, res)=>{
    // data get from body
    let name = req.body.name;
    let age = req.body.age;
    let email = req.body.email;

    const student = await Student.create({
        name: name,
        age: age,
        email: email
    })

    res.json({"student": student});
})

// GET api to get all students from students collection
app.get("/students", async (req, res)=>{
    const students = await Student.find();
    res.json({"students": students})
})

// GET api to get a students document by Id from students collection
app.get("/students/:id", async (req, res)=>{

    const studentId = req.params.id;

    const student = await Student.findById(studentId);

    res.json({"student": student});
})


// Start Server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})

// hhtps://localhost:3000/abc