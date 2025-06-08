const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const User = require('../models/user.js');
const passport = require('passport');
const { saveRedirectURL } = require('../middleware.js');

//SignUp Routes

router.get("/signup", (req, res) => {
    res.render('users/signup.ejs');
});

router.post("/signup", wrapAsync(async (req, res, next) => {
    try{
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Welcome to Airbnb!');
            res.redirect('/listings');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    } 
}));

//Login Routes

router.get("/login", (req, res) => {
    res.render('users/login.ejs');
});

router.post(
  "/login",
  saveRedirectURL,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(async (req, res) => {
    req.flash("success", "Welcome Back!");
    delete req.session.returnTo;
    res.redirect(res.locals.redirectURL || '/listings');
  }) 
);

//Logout Route
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You are logged out!');
        res.redirect('/listings');
    });
});


module.exports = router;