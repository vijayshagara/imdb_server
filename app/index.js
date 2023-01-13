const express = require("express");
const env = require("dotenv")
const indexRouterControllerc = require("./controllers/index.routerController")
const app = express();
env.config()
app.use("/",indexRouterControllerc)

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
