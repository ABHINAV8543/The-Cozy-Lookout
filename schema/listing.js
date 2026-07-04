const Joi = require("joi");

const listingSchema = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
    location : Joi.string().required(),
    country : Joi.string().required(),
    image : Joi.string().required(),
    price : Joi.number().required().min(1)
});

module.exports = listingSchema;