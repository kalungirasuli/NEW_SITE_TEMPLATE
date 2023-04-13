const express= require("express")
const router= express.Router()


//setting up the routes
router.get("/", (req, res)=>{
    res.render("index")
})
module.exports= router
