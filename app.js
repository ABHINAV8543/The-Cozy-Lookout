const express = require("express");
const app = express();
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const connectDB = require("./config/db.js");
const Review = require("./models/review.js");
const { validateListing, validateReview } = require("./utils/middleware.js");

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/listings", wrapAsync(async (req, res) => {
    let listingsData = await Listing.find();
    res.render("listings/index.ejs", { listingsData });
}));

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get("/listings/:id", wrapAsync(async (req, res) => {
    let data = await Listing.findById(req.params.id);
    if (!data) {
        throw new ExpressError(404, "Listing not found!");
    }
    let reviews = await Review.find({ _id: { $in: data.reviews } });
    res.render("listings/details.ejs", { data, reviews });
}));

app.post("/listings", validateListing, wrapAsync(async (req, res) => {
    await Listing.create(req.body);
    res.redirect("/listings");
}));

app.get("/listings/edit/:id", wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found!");
    }
    res.render("listings/edit.ejs", { listing });
}));

app.put("/listings/edit/:id", validateListing, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
    res.redirect(`/listings/${req.params.id}`);
}));

app.delete("/listings/:id", wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    res.redirect("/listings");
}));

app.get("/listings/:id/reviews/new", wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found!");
    }
    res.render("reviews/form.ejs", { listing, review: null });
}));

app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let review = await Review.create(req.body);
    listing.reviews.push(review);
    
    await listing.save(); // Must save the listing!
    
    res.redirect(`/listings/${req.params.id}`);
}));

app.get("/listings/:id/reviews/:reviewId/edit", wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let review = await Review.findById(req.params.reviewId);
    if (!review) {
        throw new ExpressError(404, "Review not found!");
    }
    res.render("reviews/form.ejs", { listing, review });
}));

app.put("/listings/:id/reviews/:reviewId", validateReview, wrapAsync(async (req, res) => {
    await Review.findByIdAndUpdate(req.params.reviewId, req.body, { runValidators: true });
    res.redirect(`/listings/${req.params.id}`);
}));

app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/listings/${req.params.id}`);
}));


app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});


app.use((err, req, res, next) => {
    if (err.name === 'CastError') {
        err = new ExpressError(400, "Invalid Listing ID format!");
    } else if (err.name === 'ValidationError') {
        err = new ExpressError(400, Object.values(err.errors).map(e => e.message).join(', '));
    }

    const statusCode = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).render("layouts/error.ejs", { error: { status: statusCode, message } });
});