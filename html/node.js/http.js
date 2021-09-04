var http=require('http')
http.createserver(function(req,res){
    res.write('hello world');
    res.end();
    console.log('server running')
}).listen(8080)