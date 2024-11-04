/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express")
const path = require("path")
const env = require("dotenv")

env.config()
const app = express()
app.disable('x-powered-by');
app.use(express.static("dist"))
app.use("*", (req, res)=>{
    res.sendFile(__dirname + "/dist/index.html")
})

app.listen(process.env.PORT || 5173, ()=> console.log("server run"))