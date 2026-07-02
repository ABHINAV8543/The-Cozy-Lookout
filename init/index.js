const Listing = require("../models/listing.js");
const sampleData = require("./data.js");
const connectDB = require("../config/db.js");

const initDB = async () => {
    await connectDB();
    console.log("Preparing for Sample Data Injection...");

    await Listing.deleteMany({});
    console.log("Data cleared...");

    await Listing.insertMany(sampleData.data);
    console.log("Data initialized...");
    
    process.exit(0);
}

initDB();