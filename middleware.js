const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const { listingSchema, reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectURL = req.originalUrl; 
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectURL = (req, res, next) => {
    if (req.session.redirectURL) {
        res.locals.redirectURL = req.session.redirectURL;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You do not have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
module.exports.isReviewOwner = async (req, res, next) => {
    const {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You did not write this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errorMessage = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errorMessage);
    }
    next();
}

module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errorMessage = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    }
}