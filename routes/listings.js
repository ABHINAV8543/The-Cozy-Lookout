const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../utils/middleware.js");
const listingController = require("../controllers/listings.js");
const cloudinary = require("../config/cloudinary.js");
const multer = require("multer");

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only images are allowed!"), false);
    }
};

const uploads = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
    fileFilter: imageFilter
});
const { uploadListingImage } = require("../utils/middleware.js");

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(uploads.single("image"), validateListing, uploadListingImage, wrapAsync(listingController.createListing));

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

router.route("/edit/:id")
    .get(isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))
    .put(isLoggedIn, isOwner, uploads.single("image"), validateListing, uploadListingImage, wrapAsync(listingController.updateListing));

module.exports = router;
