
module.exports.pageNotFoundErrorMiddleWare = (req,res,next)=>{
    next({
        status:404,
        message:"api not found",
        data:null
    })
}


module.exports.defaultErrorMiddleWare = (err,req,res,next)=>{
    if(!err.hasOwnProperty("data")){
        err["data"] = null
    }
    res.status(err.status).json(err)
}

