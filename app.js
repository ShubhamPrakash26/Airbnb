const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/auth.js');

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
app.use(express.json());

//Session Middleware
const sessionOptions = {
    secret: "mysupersecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3 // 3 day
    }
}

//Root Route
app.get("/", (req,res) =>{
    res.redirect("/listings");
})

//Session and Passport Middleware

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Flash Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

//All Routes

//Listing Routes
app.use("/listings", listingRouter);

//Review Routes
app.use("/listings/:id/reviews", reviewRouter);

//User Routes
app.use("/", userRouter);

//404 Error Handler
app.use("/", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

//Error Handler
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong"; 
    res.status(statusCode).render('error.ejs', { err });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

