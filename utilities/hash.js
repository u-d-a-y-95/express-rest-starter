
const bcrypt = require("bcrypt")
const appConfig = require("../config/appConfig")


exports.getHash = (value,round=appConfig.APP_SALT_ROUND)=>{
    return bcrypt.hash(value,round)
}

exports.compareHash=(value,hash)=>{
    return bcrypt.compare(value,hash)
}


