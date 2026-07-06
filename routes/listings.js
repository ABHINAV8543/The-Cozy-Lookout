const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../utils/middleware.js");

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
        let owner = await User.findById(data.owner);
        
        let authorIds = reviews.map(r => r.author);
        let authors = await User.find({ _id: { $in: authorIds } });
        let authorMap = {};
        for(let a of authors) {
            authorMap[a._id.toString()] = a.username;
        }

        res.render("listings/details.ejs", { data, reviews, owner, authorMap });
    }
}));

router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
}));

router.get("/edit/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings");
    }
    else {
        res.render("listings/edit.ejs", { listing });
    }
}));

router.put("/edit/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
}));

router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}));

module.exports = router;
