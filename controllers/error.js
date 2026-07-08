const ExpressError = require("../utils/ExpressError.js");

module.exports.notFound = (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
};

module.exports.handleError = (err, req, res, next) => {
    if (err.name === 'CastError') {
        err = new ExpressError(400, "Invalid Listing ID format!");
    } else if (err.name === 'ValidationError') {
        err = new ExpressError(400, Object.values(err.errors).map(e => e.message).join(', '));
    }

    const statusCode = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).render("layouts/error.ejs", { error: { status: statusCode, message } });
};
