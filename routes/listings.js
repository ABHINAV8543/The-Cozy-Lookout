const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../utils/middleware.js");
const listingController = require("../controllers/listings.js");

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

router.route("/edit/:id")
    .get(isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

module.exports = router;
