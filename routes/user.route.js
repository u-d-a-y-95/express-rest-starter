const router = require("express").Router()

const Schema = require("../schemas")
const Controller = require("../controllers")

const payloadValidationMiddleware = require("../middleware/common/payloadValidationMiddleWare")



router.post('/registration',[payloadValidationMiddleware(Schema.user.registration)],Controller.customer.registration)

module.exports = router