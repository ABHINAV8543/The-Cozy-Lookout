require("dotenv").config();
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");
const sampleData = require("./data.js");
const connectDB = require("../config/db.js");

const initDB = async () => {
    await connectDB();
    console.log("Preparing for Sample Data Injection...");

    await Listing.deleteMany({});
    await Review.deleteMany({});
    await User.deleteMany({});
    console.log("Data cleared...");

    console.log("Generating users...");
    let savedUsers = [];
    for(let i = 0; i < sampleData.users.length; i++) {
        let u = new User({ email: sampleData.users[i].email, username: sampleData.users[i].username });
        let registeredUser = await User.register(u, "password123");
        savedUsers.push(registeredUser);
    }

    const savedListings = await Listing.insertMany(sampleData.data);
    
    console.log("Generating reviews and assigning owners...");
    let reviewCounter = 0;
    for(let i = 0; i < savedListings.length; i++) {
        let listing = savedListings[i];
        
        let randomOwner = savedUsers[Math.floor(Math.random() * savedUsers.length)];
        listing.owner = randomOwner._id;
        
        const numReviews = Math.floor(Math.random() * 7) + 2;
        
        for(let j = 0; j < numReviews; j++) {
            let reviewData = sampleData.reviews[reviewCounter % sampleData.reviews.length];
            let r = new Review(reviewData);
            r.author = savedUsers[Math.floor(Math.random() * savedUsers.length)]._id;
            await r.save();
            listing.reviews.push(r._id);
            reviewCounter++;
        }
        
        await listing.save();
    }

    console.log("Data initialized...");
    process.exit(0);
}

initDB();