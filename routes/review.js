const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const {validateReview, isLoggedIn, isReviewOwner} = require('../middleware.js');
const {addReview, deleteReview} = require('../controllers/reviews.js');

//Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(addReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewOwner, wrapAsync(deleteReview));

module.exports = router;