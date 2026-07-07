const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");

module.exports.renderNewReviewForm = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found!");
    }
    res.render("reviews/form.ejs", { listing, review: null });
};

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body);
    review.author = req.user._id;
    await review.save();
    
    listing.reviews.push(review);
    await listing.save();
    
    req.flash("success", "Review added successfully!");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.renderEditReviewForm = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let review = await Review.findById(req.params.reviewId);
    if (!review) {
        throw new ExpressError(404, "Review not found!");
    }
    res.render("reviews/form.ejs", { listing, review });
};

module.exports.updateReview = async (req, res) => {
    await Review.findByIdAndUpdate(req.params.reviewId, req.body, { runValidators: true });
    req.flash("success", "Review updated successfully!");
    res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroyReview = async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${req.params.id}`);
};
