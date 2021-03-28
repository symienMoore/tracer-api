const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validation = ('./validation.js');
const joi = require('@hapi/joi');

doRegisterCheck = (data) => {
    if (data.password.length < 6) {
        return 'sorry, password must be at least 6 characters';
   }
};

exports.registerUser = async (req, res) => {
    doRegisterCheck(req.body);
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await user.save();
        res.send('user created');
    } catch (error) {
        res.status(400).send(err);
    }
}

exports.doUserLogin = (req, res) => {

}