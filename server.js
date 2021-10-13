var http=require('http')
var express = require('express');
var fs=require('fs')
var bodyparser = require('body-parser')
var path = require('path')
var http = require('http').Server(app);
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('bson');
var url = "mongodb://localhost:27017/card";
var app = express();

app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, './public')));
/* app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/nav.html'));
  });*/
   app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/Cardtable.html'));
  });
  var desk;
  var taskCollection;
  app.get('/jobDescription',function(req,res){
   res.sendFile(path.join(__dirname +'/jobDetails.html'));
  });
  app.get('/show?',function(req,res){
   res.sendFile(path.join(__dirname +'/nav.html'));
  });
  
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     desk = db.db("card");
     taskCollection = desk.collection("cards")
  });
app.post('/cards',(req, res) => {
console.log(req.body,"body")
taskCollection.insertOne(req.body, function (err1, resp) {
   if (err1) console.log(err1)
   else {
     
     res.send(resp)
   }
 })
})
app.get('/getDetails',(req,res)=>{
   taskCollection.find().toArray(function(err,result) {
      if (err) {
       console.log(err)
      }else{
         console.log(result);
      res.send(result)
      }
      })
   })
         
app.post('/updateDetails',(req,res)=>{
            console.log(req.body,"body")
            let obj={
               selectDegree:req.body.selectDegree,
               Degree1:req.body.Degree1,
               Major:req.body.Major,
               Institute:req.body.Institute,
               Graduation:req.body.Graduation,
               Merit:req.body.Merit,
               gpa:req.body.gpa,
         }
         taskCollection.updateOne({
            "_id": ObjectId(req.body._Id)
          }, {
            $set:obj
          }, function (err1, resp) {
             if(err1){
                console.log(err1);
             }
             console.log(resp);
             res.send(resp)
          })
      })
      
 app.listen(4040);
  
  console.log('Running at Port 4040');
