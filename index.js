const express = require("express")
const dotenv = require("dotenv").config()


// 
const database = require("./config/dbConfig")
const routes = require('./routes')
const {defaultErrorMiddleWare} = require("./middleware/common/defaultErrorMiddleWare")
const app = express()

// common middleware for payload parsing
app.use(express.json())

// middleware for router 
app.use('/api', routes)

app.get("/",(req,res)=>{
    res.send("Hi \n This is restful-api for food ordering app")
})


app.use(defaultErrorMiddleWare)



// 
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on ${process.env.APP_PORT}`)
})



