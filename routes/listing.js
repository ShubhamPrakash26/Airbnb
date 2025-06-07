const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const {listingSchema} = require('../schema.js');

const validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errorMessage = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    }
}

//Index Route
router.get("/",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Listing Route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
})

//Show Route
router.get("/:id", wrapAsync( async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    } 
    // If listing not found, redirect to listings index with error message
    res.render("listings/show.ejs", {listing});
}));

//Create Listing Route
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "Successfully created a new listing!"); 
    res.redirect("/listings");
}));

//Update Listing Route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Successfully updated the listing!");
    res.redirect(`/listings/${id}`);
}));

//Edit Route
router.get("/:id/edit",  wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
}));

//Delete Route
router.delete("/:id",  wrapAsync(async (req, res) => {
    let id = req.params.id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if(!deletedListing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    req.flash("success", "Successfully deleted the listing!");
    res.redirect("/listings");
}));

//Export the router
module.exports = router;