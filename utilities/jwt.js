const jwt = require('jsonwebtoken')




exports.getToken = (payload,secretKey=process.env.APP_JWT_SCREET) =>{
    return jwt.sign(JSON.stringify(payload),secretKey)
}

exports.verfyToken = (token,secretKey=process.env.APP_JWT_SCREET) =>{
    return jwt.verify(token,secretKey)
}

