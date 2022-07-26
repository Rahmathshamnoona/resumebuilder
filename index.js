var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.psw);

  try {
    const user = await User.findOne({ 
      email: req.body.email
    });
    console.log(user);
    if(user) {
      if(user.password == req.body.psw) {
        res.send("Login successfull");
      }else {
        res.send('Invalid password');
        }

    }else {
      res.send('Invalid email id');
      }
  } catch (err) {
    console.log(err);
    res.send("Server error");
  }

});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.psw);

  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.psw
    });
    await newUser.save()
    res.send("Signup successfull");
  } catch (err) {
    console.log(err);
    res.send("Server error");
  }

});

module.exports = router;
