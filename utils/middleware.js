const ExpressError = require("./ExpressError.js");
const listingSchema = require("../schema/listing.js");
const reviewSchema = require("../schema/review.js");

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