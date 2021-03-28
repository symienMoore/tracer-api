const mongoose = require('mongoose');


const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', User);