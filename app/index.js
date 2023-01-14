const express = require("express");
const env = require("dotenv")
const movieRouterControllerc = require("./controllers/movie.routerController")
const app = express();
env.config()
//ROUTER MIDDLEWARE
app.use("/movies",movieRouterControllerc)

//ERROR HANDLING
app.use((err,req,res,next)=>{
    console.log(err);
    res.send(err)
   return res.status(500).send({
    message:"internal server error"
   })
})

//PATH NOT FOUND
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
