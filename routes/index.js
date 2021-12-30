const router = require("express").Router();
const customerRoute = require("./customer.route")

router.use('/customer',customerRoute)


module.exports = router