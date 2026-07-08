const Joi = require("joi");

const listingSchema = Joi.object({
    title : Joi.string().required(),

    description : Joi.string().required(),

    location : Joi.string().required(),

    country : Joi.string().required(),

    category: Joi.string().valid("Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes", "Boats").required(),

    image: Joi.object({
        url: Joi.string().required(),
        filename: Joi.string().required()
    }).optional(),

    price : Joi.number().required().min(1)
});

module.exports = listingSchema;