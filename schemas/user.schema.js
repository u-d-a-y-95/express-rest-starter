const joi = require('joi')

exports.registration = joi.object({
    name:joi.string().required("Name is required"),
    email:joi.string().email().required("Email is required"),
    password:joi.string().required("password is required"),
})