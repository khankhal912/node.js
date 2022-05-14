const express=require("express");
const Routes=express.Router();
const connectDB=require("../database/connection")

// //mongodb connect
connectDB();

Routes.get("/",(req,res)=>{

})

module.exports=Routes