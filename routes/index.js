var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');

const passport = require('passport');
const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

const upload = require('./multer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', isLoggedIn, async function (req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  }).populate("posts")

  res.render('profile', { user });
});

// register route
router.post('/register', function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
  });
  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/profile');
      });
    })
});

// login route
router.get('/login', function (req, res, next) {
  res.render('login', { error: req.flash('error') });
  res.render('login');
});

// login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}), function (req, res) { })

router.get('/feed', function (req, res, next) {
  res.render('feed');
});

// logout route
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.post('/upload', isLoggedIn, upload.single("file"), async function (req, res, next) {
  if (!req.file) {
    return res.status(404).send("no files were given");
  }
  const user = await userModel.findOne({ username: req.session.passport.user })
  const post = await postModel.create({
    image: req.file.filename,
    imageText: req.body.fileCaption,
    user: user._id,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect('/profile');
});

// logout middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
