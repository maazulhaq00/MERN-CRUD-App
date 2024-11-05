// configure env variables
require("dotenv").config()


// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const Student = require("./models/student");
const studentController = require("./controllers/studentController")

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

// Routes to handle students collection

app.post("/students", studentController.createStudent)
app.get("/students", studentController.fetchStudents)
app.get("/students/:id", studentController.fetchStudentById)
app.put("/students/:id", studentController.updateStudent)
app.delete("/students/:id", studentController.deleteStudent)


// Start Server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})

// hhtps://localhost:3000/abc