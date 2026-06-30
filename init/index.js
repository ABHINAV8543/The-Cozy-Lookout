const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const sampleData = require("./data.js");

async function connectDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/thecozylookout");
}
connectDB()
.then(() => {
    console.log("Connected to Database... Now Preparing for Sampel Data Injection...");
})
.catch((error) => {
    console.log(error);
});

const initDB = async () => {

    await Listing.deleteMany({});
    console.log("Data cleared...");

    await Listing.insertMany(sampleData.data);
    console.log("Data initialized...");
}

initDB();