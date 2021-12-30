

const payloadValidationMiddleware = (schema) =>{
    
    return (req,res,next) =>{
        console.log("Middleware")
        result =schema.validate(req.body,{abortEarly:false,allowUnknown:true})
        if(result?.error){
            next({
                status:400,
                message:"Bad Request",
                data:result?.error?.details.map(item=>{
                    return {
                        message:item?.message?.replaceAll('\"',"")
                        
                    }
                })
            })
        }else{
            next()
        }
    }
}


module.exports = payloadValidationMiddleware