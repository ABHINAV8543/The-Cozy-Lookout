const ExpressError = require("./ExpressError.js");
const listingSchema = require("../schema/listing.js");
const reviewSchema = require("../schema/review.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const cloudinary = require("../config/cloudinary.js");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to do that!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    const validateResult = listingSchema.validate(req.body, { abortEarly: false });
    if(validateResult.error){
        throw new ExpressError(
            400, 
            validateResult.error.details.map(el => el.message).join(",")
        );
    }
    else{
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    const validateResult = reviewSchema.validate(req.body, { abortEarly: false });
    if(validateResult.error){
        throw new ExpressError(
            400, 
            validateResult.error.details.map(el => el.message).join(",")
        );
    }
    else{
        next();
    }
}

module.exports.uploadListingImage = (req, res, next) => {
    if (!req.file) {
        if (req.method === 'PUT') {
            return next();
        }
        throw new ExpressError(400, "Image is required for new listings!");
    }

    const stream = cloudinary.uploader.upload_stream(
        { folder: "thecozylookout" }, 
        (error, result) => {
            if (error){
                return res.status(500).json({ error });
            }
            req.body.image = {
                url: result.secure_url,
                filename: result.public_id
            };
            next();
        }
    );
    stream.end(req.file.buffer);
}