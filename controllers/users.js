const User = require('../models/user');
const passport = require('passport');

module.exports.renderSignUpForm = (req, res) => {
    res.render('users/signup.ejs');
}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login.ejs');
}

module.exports.signUp = async (req, res, next) => {
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
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back!");
    delete req.session.returnTo;
    res.redirect(res.locals.redirectURL || '/listings');
}

module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You are logged out!');
        res.redirect('/listings');
    });
}