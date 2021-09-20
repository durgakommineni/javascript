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
    res.sendFile(path.join(__dirname+'/render.html'));
   });
   var desk;
   var taskCollection;
 
  MongoClient.connect(url, function(err, db) {
     if (err) throw err;
      desk = db.db("desk");
      taskCollection = desk.collection("addName")
   });
app.post('/addName', (req, res) => {
    //Insert into db
    var body = req.body;
    res.send({
    fName: body.FName,
    lName: body.LName
    });
});app.listen(9090)