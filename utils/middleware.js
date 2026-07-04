const ExpressError = require("./ExpressError.js");
const listingSchema = require("../schema/listing.js");

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