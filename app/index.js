const express = require("express");
const env = require("dotenv")
const app = express();
env.config()

app.post("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Post method is calling in /"
    })
})
app.get("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Get method is calling in /"
    })
})
app.put("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Get method is calling in /"
    })
})

app.use((req,res,next)=>{
    return res.status(404).send({
        "message":"Router Not Found"
    })
})
app.listen(process.env.APP_PORT ,(err)=>{
    if(err){
        console.error(`cannot run on port 4567 ${process.env.APP_PORT}`);
        process.exit(1)
    }else{
        console.log(`app running successfully in port ${process.env.APP_PORT}`);
    }
})
