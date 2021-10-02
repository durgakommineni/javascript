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
// app.use(express.static(__dirname))
app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/py.html'));
  });
  var desk;
  var jobCollection;
  app.get('/show?',function(req,res){
   res.sendFile(path.join(__dirname +'/py2.html'));
  });
  
app.use(express.static(path.join(__dirname, 'public2')));
// app.use(express.static(path.join(__dirname, 'static')));
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     desk = db.db("desk");
     jobCollection = desk.collection("jobtitle")
  });
app.post('/jobtitle',(req, res) => {

jobCollection.insertOne(req.body, function (err1, resp) {
   if (err1) console.log(err1)
   else {
     
     res.send(resp)
   }
 })
})
app.get('/getDetails',(req,res)=>{
   jobCollection.find().toArray(function(err,result) {
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
     "JobTitle": req.body.JobTitle,
  "yearsofexpirence": req.body.yearsofexpirence,
  "jobType": req.body.jobType,
  "Language": req.body.Language,
  "locations": req.body.locations,
  "radius": req.body.radius,
  "Distance": req.body.Distance,
  "vacancies": req.body.vacancies,
  "Department":req.body.Department,
  "unit": req.body.unit,
  "Reason":  req.body.Reason,
  "Grade":  req.body.Grade,
  "Requiredskills": req.body.Requiredskills,
  "Prefferedskills": req.body.Prefferedskills,
  "Certificates":  req.body.Certificates,
  "work":  req.body.work,
  "languagesknown": req.body.languagesknown,
  "notice":  req.body.notice,
  "salary": req.body.salary,
  "jobtiming":  req.body.jobtiming,
  "workinghours":  req.body.workinghours,
"nationality":  req.body.nationality,
 "age":  req.body.age,
  "Gender":  req.body.Gender,
  "remote":  req.body.remote,
  "offshore":  req.body.offshore,
  "travel":  req.body.travel,
  "passport":  req.body.passport,
   } 
   jobCollection.updateOne({
      "_id": ObjectId(req.body._id)
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
  app.listen(9000);
  
  console.log('Running at Port 9000');


  