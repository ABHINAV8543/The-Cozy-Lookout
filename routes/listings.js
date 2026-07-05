const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing } = require("../utils/middleware.js");

router.get("/", wrapAsync(async (req, res) => {
    let listingsData = await Listing.find();
    res.render("listings/index.ejs", { listingsData });
}));

router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

router.get("/:id", wrapAsync(async (req, res) => {
    let data = await Listing.findById(req.params.id);
    if (!data) {
        throw new ExpressError(404, "Listing not found!");
    }
    let reviews = await Review.find({ _id: { $in: data.reviews } });
    res.render("listings/details.ejs", { data, reviews });
}));

router.post("/", validateListing, wrapAsync(async (req, res) => {
    await Listing.create(req.body);
    res.redirect("/listings");
}));

router.get("/edit/:id", wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found!");
    }
    res.render("listings/edit.ejs", { listing });
}));

router.put("/edit/:id", validateListing, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect(`/listings/${req.params.id}`);
}));

router.delete("/:id", wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
}));

module.exports = router;
