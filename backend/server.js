// configure env variables
require("dotenv").config()


// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Create express app
const app = express();

// connecting to database
connectToDb();

// Routes
app.get("/", (req, res) => {
    // business logic

    res.json({"message": "Hello World", "status": "success"});
})

// Start Server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`);
})

// hhtps://localhost:3000/abc