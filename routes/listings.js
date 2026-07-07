const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../utils/middleware.js");
const listingController = require("../controllers/listings.js");

router.get("/", wrapAsync(listingController.index));
router.get("/new", isLoggedIn, listingController.renderNewForm);
router.get("/:id", wrapAsync(listingController.showListing));
router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createListing));
router.get("/edit/:id", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
router.put("/edit/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;
