const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");

async function connectDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/thecozylookout");
}
connectDB()
.then(() => {
    console.log("Connected to Database");
})
.catch((error) => {
    console.log(error);
});

app.set("view engine", "ejs");
app.set("path", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Home Page");
});