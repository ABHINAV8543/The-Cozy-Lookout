const mongoose = require("mongoose");
const Review = require("./review.js");
const User = require("./user.js");
const { ref } = require("joi");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: [100, "Title should be under 100 characters."]
    },

    description: {
        type: String
    },

    image: {
        url: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        }
    },

    price: {
        type: Number,
        required: true,
        min: [1, "Price cannot be less than 1."]
    },

    location: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;