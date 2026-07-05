const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const connectDB = require("./config/db.js");

const listingsRouter = require("./routes/listings.js");
const reviewsRouter = require("./routes/reviews.js");

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

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);

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