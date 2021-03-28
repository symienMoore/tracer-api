//TODO: need to update this file, hapi/joi went through updates and need to sort through it

// const joi = require('@hapi/joi');


// exports.doRegisterCheck = (data, req, res) => {
//     if (data.password.length < 6) {
//         return res.send('sorry, your password must be at least 6 characters');
//    }
// };


// module.exports.doRegisterCheck = doRegisterCheck;

// const authSchema = joi.object({
//     name: joi.string().required(),
//     username: joi.string().min(6).required(),
//     email: joi.string().required().email(),
//     password: joi.string().min(6).required()
// })

// module.exports = {
//     authSchema
// }