const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const sampleData = require("./data.js");
const connectDB = require("../config/db.js");

const initDB = async () => {
    await connectDB();
    console.log("Preparing for Sample Data Injection...");

    await Listing.deleteMany({});
    await Review.deleteMany({});
    console.log("Data cleared...");

    const savedListings = await Listing.insertMany(sampleData.data);
    
    console.log("Generating reviews...");
    let reviewCounter = 0;
    for(let i = 0; i < savedListings.length; i++) {
        let listing = savedListings[i];
        
        const numReviews = Math.floor(Math.random() * 7) + 2;
        
        for(let j = 0; j < numReviews; j++) {
            let reviewData = sampleData.reviews[reviewCounter % sampleData.reviews.length];
            let r = await Review.create(reviewData);
            listing.reviews.push(r._id);
            reviewCounter++;
        }
        
        await listing.save();
    }

    console.log("Data initialized with reviews...");
    process.exit(0);
}

initDB();