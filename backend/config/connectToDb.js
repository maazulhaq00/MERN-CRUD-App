require("dotenv").config();

const mongoose = require("mongoose");

async function connectToDb(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Your database connected successfully");
    }
    catch (err){
        console.log(err);
    }
}

module.exports = connectToDb;