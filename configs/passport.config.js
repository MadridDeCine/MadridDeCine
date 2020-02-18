const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const User          = require('../models/user.model');

passport.serializeUser((user, callback) => callback(null, user._id));

passport.deserializeUser((id, callback) => {
    User.findById(id)
      .then(user => callback(null, user))
      .catch(error => callback(error));
  });

  passport.use(new LocalStrategy((username, password, next) => {
    let user;
    User.findOne({ username })
      .then(doc => {
        user = doc;
        console.log('user in login: ', user);
        // here we will get either null (if username doesn't exist) or user object

        // if we get null
        if (!user) next(null, false, { message: 'Incorrect username' });

        // if we get user object
        return bcrypt.compare(password, user.password);
      })
      .then(isPasswordCorrect => {
        if (isPasswordCorrect) next(null, user);
        else next(null, false, { message: 'Incorrect password' });
      })
      .catch(error => next(error));
  })
);

module.exports = (app)  => {
  
    app.use(session({
      secret: 'madrizdecine',
      resave: true,
      saveUninitialized: true,
      store: new MongoStore( { mongooseConnection: mongoose.connection })
    }))
  app.use(passport.initialize());
  app.use(passport.session());
}