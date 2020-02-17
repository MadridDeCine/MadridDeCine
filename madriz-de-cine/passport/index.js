const passport = require('passport');
const mongoose     = require('mongoose');
const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);

require('./serializers');
require('./localStrategy');

module.exports = (app)  => {
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore( { mongooseConnection: mongoose.connection })
  }))
}
