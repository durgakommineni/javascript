const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('everything cuts a little deep a nyt')
})
 console.log('server running')
app.listen(9999)