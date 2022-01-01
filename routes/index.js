const router = require("express").Router();
const userRoute = require("./user.route")

router.use('/users',userRoute)



module.exports = router