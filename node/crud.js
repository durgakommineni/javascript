const express=require('express')
const app=express();
app.get('/',(req,res)=>{
    res.send("every one is true")
}); app.listen(9090);
console.log("server running")