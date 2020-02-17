require('dotenv').config();

const express      = require('express');
const hbs          = require('hbs');
const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash      = require("connect-flash");
    
const app = express();

// DB, middlewares, locals & debug
require('./configs/mongoose.config')
require('./configs/middleware.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/locals.config')(app)
require('./configs/debug.config')

hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
      throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined ) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }
});
  

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(flash());
require('./passport')(app);
    

const index = require('./routes/index.routes');
app.use('/', index);

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const filmRoutes = require('./routes/films.routes');
app.use('/film', filmRoutes);

const suggestionRoutes = require('./routes/suggestion.routes.js')
app.use('/suggestion', suggestionRoutes)
      
module.exports = app
