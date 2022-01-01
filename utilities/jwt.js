const jwt = require('jsonwebtoken')
const appConfig = require("../config/appConfig")



exports.getToken = (payload,secretKey=appConfig.APP_JWT_SCREET) =>{
    return jwt.sign(JSON.stringify(payload),secretKey)
}

exports.verfyToken = (token,secretKey=appConfig.APP_JWT_SCREET) =>{
    return jwt.verify(token,secretKey)
}

