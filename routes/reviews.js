const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../utils/middleware.js");
const reviewController = require("../controllers/reviews.js");

router.get("/new", isLoggedIn, wrapAsync(reviewController.renderNewReviewForm));
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
router.get("/:reviewId/edit", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.renderEditReviewForm));
router.put("/:reviewId", isLoggedIn, isReviewAuthor, validateReview, wrapAsync(reviewController.updateReview));
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
