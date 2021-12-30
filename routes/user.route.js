const router = require("express").Router()

const Schema = require("../schemas")
const Controller = require("../controllers")

const payloadValidationMiddleware = require("../middleware/common/payloadValidationMiddleWare")



router.get('/',Controller.user.getAllUser)
router.post('/registration',[payloadValidationMiddleware(Schema.user.registration)],Controller.user.registration)

module.exports = router