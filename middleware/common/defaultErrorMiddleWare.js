module.exports.defaultErrorMiddleWare = (err,req,res,next)=>{
    res.status(err.status).json(err)
}