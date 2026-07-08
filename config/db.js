const mongoose = require("mongoose");

let dbURL = process.env.ATLAS_URL || "mongodb://localhost:27017/the-cozy-lookout";

async function connectDB() {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = connectDB;