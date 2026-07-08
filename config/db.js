const mongoose = require("mongoose");

let dbURL = process.env.ATLAS_URL;

async function connectDB() {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = connectDB;