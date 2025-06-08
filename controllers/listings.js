const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing =  async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    } 
    // If listing not found, redirect to listings index with error message
    res.render("listings/show.ejs", {listing});
}

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {
        url: url,
        filename: filename
    };
    await newListing.save();
    req.flash("success", "Successfully created a new listing!"); 
    res.redirect("/listings");
}

module.exports.updateListing = async (req, res) => {
    let id = req.params.id;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== "undefined" && req.file){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {
            url: url,
            filename: filename
        };
        await listing.save();
    }
    req.flash("success", "Successfully updated the listing!");
    res.redirect(`/listings/${id}`);
}

module.exports.renderEditForm = async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_300,h_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
}

module.exports.deleteListing = async (req, res) => {
    let id = req.params.id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    if(!deletedListing) {
        req.flash("error", "Cannot find that listing!");
        return res.redirect("/listings");
    }
    req.flash("success", "Successfully deleted the listing!");
    res.redirect("/listings");
}