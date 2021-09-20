var http=require('http')
http.createServer(function(req,res){
    res.end("everyone is true until the turn comes to you")
}).listen(9999)