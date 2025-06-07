const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const User = require('../models/user.js');
const passport = require('passport');

//SignUp Routes

router.get("/signup", (req, res) => {
    res.render('users/signup.ejs');
});

router.post("/signup", wrapAsync(async (req, res, next) => {
    try{
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.flash('success', 'Welcome to Airbnb!');
        res.redirect('/listings');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    } 
}));

//Login Routes

router.get("/login", (req, res) => {
    res.render('users/login.ejs');
});

router.post("/login", passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), wrapAsync(async (req, res, next) => {
    const { username, password } = req.body;
    req.flash('success', 'Welcome Back!');
    res.redirect('/listings'); 
}));


module.exports = router;