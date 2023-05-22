const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');
router.post('/register', async (req, res,next) => {
  try {
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    console.log(req.body);
    const newUser = new User(
      {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      }
    );
    await newUser.save();
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});  
router.post('/login', async (req, res,next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ message: 'Cannot find user' });
    }
    if (!bcrypt.compare(req.body.password, user.password)) {
      return next(createError(400,'Password is incorrect'));
    }
    const { password, ...others } = user._doc;
    console.log({ ...others });
    res.json({ ...others });
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});  

module.exports = router;