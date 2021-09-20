var http=require('http')
var express = require('express');
var fs=require('fs')
var bodyparser = require('body-parser')
var path = require('path')
var http = require('http').Server(app);
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('bson');
var url = "mongodb://localhost:27017/desk";
var app = express();
app.use(bodyparser.json())
app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/index.html'));
  });
  var desk;
  var signUpCollection;

 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     desk = db.db("desk");
     taskCollection = desk.collection("task1")
  });
//app.use('/', router);
app.post('/task1',(req, res) => {

signUpCollection.insertOne(req.body, function (err1, resp) {
   if (err1) console.log(err1)
   else {
     
     res.send(resp)
   }
 })
})
app.get('/getTask1Details',(req,res)=>{
   signUpCollection.find().toArray(function(err,result) {
      if (err) {
       console.log(err)
      }else{
         console.log(result);
      res.send(result)
      }
      })
})
app.post("/deleteTask1",(req,res)=>{
   let id = ObjectId(req.body._id)
   taskCollection.deleteOne({
      "_id": id
    }, (err, result) => {
      if(err){
         console.log(err)
      }else{
         console.log(result,"result");
         res.send(result)
      }
   })
})
app.put('/updateTask1',(req,res)=>{
   console.log(req.body,"body")
   let newDoc = {
      "FirstName":req.body.FirstName,
      "LasttName":req.body.LastName,
      "Email":req.body.Email,
      "phone":req.body.phone,
      "password":req.body.password,
     
   }
   signUpCollection.updateOne({
      "_id": ObjectId(req.body.taskId)
    }, {
      $set: newDoc
    }, function (err1, resp) {
       if(err1){
          console.log(err1);
       }
       console.log(resp);
       res.send(resp)
    })
})
  app.listen(9090);
  
  console.log('Running at Port 9090');


  