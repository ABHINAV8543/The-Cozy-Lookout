const Joi = require("joi");

const listingSchema = Joi.object({
    comment : Joi.string().required(),
    rating : Joi.number().required().min(1).max(5),
});

module.exports = listingSchema;