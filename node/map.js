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
   res.sendFile(path.join(__dirname+'/map.html'));
  });
  var desk;
  var taskCollection;

 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     desk = db.db("desk");
     taskCollection = desk.collection("jobs")
  });
app.post('/jobs',(req, res) => {

taskCollection.insertOne(req.body, function (err1, resp) {
   if (err1) console.log(err1)
   else {
     
     res.send(resp)
   }
 })
})
app.get('/getJobDetails',(req,res)=>{
   taskCollection.find().toArray(function(err,result) {
      if (err) {
       console.log(err)
      }else{
         console.log(result);
      res.send(result)
      }
      })
})
  app.listen(9000);
  
  console.log('Running at Port 9000');


  