const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

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
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/listings", async (req, res) => {
    let listingsData = await Listing.find();
    res.render("listings/index.ejs", { listingsData });
});

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
    let data = await Listing.findById(req.params.id);
    res.render("listings/details.ejs", { data });
});

app.post("/listings", async (req, res) => {
    await Listing.insertOne(req.body);
    res.redirect("/listings");
});

app.get("/listings/edit/:id", async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    res.render("listings/edit.ejs", { listing });
});

app.put("/listings/edit/:id", async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/listings/${req.params.id}`);
});

app.delete("/listings/:id", async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});