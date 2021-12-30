const router = require("express").Router()
const CustomerController = require("../controllers/customer/customer.controller")


router.post('/registration',CustomerController.registration)

module.exports = router