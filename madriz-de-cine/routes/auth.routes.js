const express = require("express");
const passport = require('passport');
const User = require("../models/User");
const ensureLogin = require("connect-ensure-login");
const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/auth/user",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  
  const { username, password } = req.body

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username })
        .then(user => {
            if (user) {
                res.render("auth/signup", { message: "El usuario ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({ username, password: hashPass })
              .then(user => {
                req.login(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/auth/user');
              })})
              .catch(() => res.render("auth/signup", { message: "Something went wrong" }))
        })
        .catch(error => next(error))
        
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/users/' + req.user.username);
        });
        
});

router.get("/user",(req,res)=>{
  console.log(req.user)
  res.render("auth/auth-user",req.user)
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



module.exports = router;
