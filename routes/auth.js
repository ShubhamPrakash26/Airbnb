const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const User = require('../models/user.js');
const passport = require('passport');
const { saveRedirectURL } = require('../middleware.js');
const { signUp, renderSignUpForm, renderLoginForm, login, logout } = require('../controllers/users.js');

//SignUp Routes

router.route('/signup')
  .get(renderSignUpForm) // Render Sign Up Form
  .post(wrapAsync(signUp)); // Handle Sign Up Form Submission

//Login Routes

router.route("/login")
  .get(renderLoginForm)   // Render Login Form
  .post(saveRedirectURL, passport.authenticate("local", {   // Authenticate User
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(login));

//Logout Route
router.get("/logout", logout );

module.exports = router;