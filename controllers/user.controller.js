const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validation = ('./validation.js');


exports.registerUser = async (req, res) => {
    // runs validation on passed in data
    doRegisterCheck(req.body, req, res);
    // uses passed in data to check for user
    const invalidEmail = User.findOne({ email: req.body.email });
    if (invalidEmail) return res.status(400).send('It appears the user exists');
    // if no user and request is valid
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        await user.save();
        res.send('user created');
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.doUserLogin = (req, res) => {

}


//VALIDATORS
doRegisterCheck = (data, req, res) => {
    if (data.password.length < 6) {
          res.send('sorry, password must be at least 6 characters');
    } else if (data.username.length < 4) {
          res.send('your username must be at least 4 characters');
    } else if (!data.email.includes('@') || !data.email.includes('.')) {
          res.send('please enter a valid email address');
    }

};