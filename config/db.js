const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/thecozylookout");
        console.log("Connected to Database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = connectDB;
