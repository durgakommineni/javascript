var Express= require('express');
var app=Express();
app.get('/',(req,res)=>{
 res.send("Welcome to Express App")
});
app.get('/A.txt',(req,res)=>{
 res.send("Welcome to Express aa")
});
app.post('/A.txt',(req,res)=>{
 res.send("Welcome to Express with request")
});
app.put('/A.txt',(req,res)=>{
 res.send("Welcome to request")
});
app.delete('/A.txt',(req,res)=>{
 res.send("Welcome to Express with delete request")
});
app.listen('8080',()=>
{
 console.log('server started at 8080 port')
});