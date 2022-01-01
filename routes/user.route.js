const router = require("express").Router()

const Schema = require("../schemas")
const Controller = require("../controllers")

const payloadValidationMiddleware = require("../middleware/common/payloadValidationMiddleWare")
const {authMiddleWare} = require("../middleware/common/authMiddleware")

router.post('/login',[payloadValidationMiddleware(Schema.user.login)],Controller.user.login)

router.post('/registration',[payloadValidationMiddleware(Schema.user.registration)],Controller.user.registration)

router.get('/',authMiddleWare,Controller.user.getAllUser)



module.exports = router