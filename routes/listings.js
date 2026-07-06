const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn } = require("../utils/middleware.js");

router.get("/", wrapAsync(async (req, res) => {
    let listingsData = await Listing.find();
    res.render("listings/index.ejs", { listingsData });
}));

router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

router.get("/:id", wrapAsync(async (req, res) => {
    let data = await Listing.findById(req.params.id);
    if (!data) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings");
    }
    else {
        let reviews = await Review.find({ _id: { $in: data.reviews } });
        res.render("listings/details.ejs", { data, reviews });
    }
}));

router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    await Listing.create(req.body);
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
}));

router.get("/edit/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings");
    }
    else {
        res.render("listings/edit.ejs", { listing });
    }
}));

router.put("/edit/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
}));

router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}));

module.exports = router;
