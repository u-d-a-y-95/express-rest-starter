
const Service = require("../services")

exports.registration=(req,res)=>{
    res.json(Service.customer.createCustomer(req,res))
}

