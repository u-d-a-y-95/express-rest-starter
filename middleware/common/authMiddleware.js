const utilities = require("../../utilities")

exports.authMiddleWare = async (req,res,next) =>{
    const token = req?.headers["authorization"]?.split(" ")[1]
    try {
        const decode =await utilities.jwt.verfyToken(token)
        req.user = decode
        next()

    } catch (error) {
        next({
            status:401,
            message:"Unauthorized",
            data:null
        })
    }
}