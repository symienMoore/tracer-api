const joi = require('@hapi/joi');


doRegisterCheck = (data) => {
    if (data.password.length < 6) {
        return 'sorry, password must be at least 6 characters';
   }
};


module.exports.doRegisterCheck = doRegisterCheck;

// const authSchema = joi.object({
//     name: joi.string().required(),
//     username: joi.string().min(6).required(),
//     email: joi.string().required().email(),
//     password: joi.string().min(6).required()
// })

// module.exports = {
//     authSchema
// }