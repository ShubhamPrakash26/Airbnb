const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const Listing = require('./models/listing.js');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');

const PORT = 8080;
const app = express();

const MONGOURI = "mongodb://127.0.0.1:27017/airbnb"; 

async function main() {
    await mongoose.connect(MONGOURI);
}

main().then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err)
});


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.get("/", (req,res) =>{
    res.send("Hello World");
})

//Index Route
app.get("/listings",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Listing Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})

//Create Listing Route
app.post("/listings", wrapAsync(async (req,res, next) => {
    const listing = req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
}));

//Update Listing Route
app.put("/listings/:id",  wrapAsync(async (req, res) => {
    let id = req.params.id;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//Show Route
app.get("/listings/:id", wrapAsync( async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/show.ejs", {listing});
}));

//Edit Route
app.get("/listings/:id/edit",  wrapAsync(async (req, res) => {
    let id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//Delete Route
app.delete("/listings/:id",  wrapAsync(async (req, res) => {
    let id = req.params.id;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log("Deleted Listing: ", deletedListing);
    res.redirect("/listings");
}));

//Error Route
app.get("/error", (req, res) => {
    res.render("error.ejs");
})

//404 Error Handler
app.use((req, res, next) => {
    console.log("404 Error");
    next(new ExpressError(404, "Page Not Found!"));
});

//Error Handler
app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).send(message);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

