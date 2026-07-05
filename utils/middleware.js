const ExpressError = require("./ExpressError.js");
const listingSchema = require("../schema/listing.js");
const reviewSchema = require("../schema/review.js");

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