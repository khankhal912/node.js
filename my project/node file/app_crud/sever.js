const express=require("express");
const app=express();
const Routes=require("./server/routes/routes")

//bodyparser
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());



const port=process.env.PORT || 9090
app.listen(port,()=>{
    console.log(`listening port ${port}`)
})

app.use("/",(req,res)=>{})