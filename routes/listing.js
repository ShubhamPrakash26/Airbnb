const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js');
const {isLoggedIn, isOwner, validateListing} = require('../middleware.js');
const {index, renderNewForm, showListing, createListing, updateListing, renderEditForm, deleteListing} = require('../controllers/listings.js');
const multer = require('multer');
const { cloudinary, storage } = require('../cloudConfig.js'); 
const upload = multer({storage}); // Set the destination for uploaded files

router.route('/')
  .get(wrapAsync(index)) // Index Route
  .post(validateListing, isLoggedIn, upload.single('listing[image]'), wrapAsync(createListing)); // Create Listing Route

//New Listing Route
router.get("/new", isLoggedIn, renderNewForm);

router.route('/:id')
    // Show Listing Route
    .get(wrapAsync(showListing)) 
    // Update Listing Route
    .put(isLoggedIn, isOwner,upload.single('listing[image]'),validateListing, wrapAsync(updateListing)) 
    // Delete Listing Route
    .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));


//Export the router
module.exports = router;