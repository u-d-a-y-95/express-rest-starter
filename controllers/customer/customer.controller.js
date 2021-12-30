
const payloadValidationMiddleware = require("../../middleware/common/payloadValidationMiddleWare")
const joi = require('joi')

const Service = require("../../services")

const registrationSchema = joi.object({
    userType:joi.number().positive().required("User Type is required"),
    mobile:joi.string().length(11).required("Mobile Number is required"),
    email:joi.string().email().required("Email is required"),
    password:joi.string().required("Password is required"),
    address:joi.string(),
    postCode:joi.string()
})

exports.registration=(req,res)=>{
    res.json(Service.customer.createCustomer(req,res))
}

