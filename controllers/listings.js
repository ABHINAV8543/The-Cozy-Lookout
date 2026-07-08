const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let listingsData = category 
        ? await Listing.find({ category }) 
        : await Listing.find();
        
    const categoryIconMap = {
        'Trending': 'fa-solid fa-fire',
        'Rooms': 'fa-solid fa-bed',
        'Iconic Cities': 'fa-solid fa-mountain-city',
        'Mountains': 'fa-solid fa-mountain',
        'Castles': 'fa-brands fa-fort-awesome',
        'Amazing Pools': 'fa-solid fa-person-swimming',
        'Camping': 'fa-solid fa-campground',
        'Farms': 'fa-solid fa-cow',
        'Arctic': 'fa-regular fa-snowflake',
        'Domes': 'fa-solid fa-igloo',
        'Boats': 'fa-solid fa-ship'
    };
    let currentIcon = category && categoryIconMap[category] ? categoryIconMap[category] : 'fa-solid fa-border-all';

    res.render("listings/index.ejs", { listingsData, selectedCategory: category, currentIcon });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
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
};

module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        res.redirect("/listings");
    }
    else {
        res.render("listings/edit.ejs", { listing });
    }
};

module.exports.updateListing = async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroyListing = async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
};
