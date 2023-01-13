const express = require("express")
router = express.Router()


router.post("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Post method is calling in /"
    })
})
router.get("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Get method is calling in /"
    })
})
router.put("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Put method is calling in /"
    })
})
router.delete("/",(req,res,next)=>{
    res.status(200).send({
        "message":"Delete method is calling in /"
    })
})


module.exports = router