var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    fs.readFile('./first.html',(error,data)=>{
        if(error){
            res.write('file not find')
        }
        else{
            res.write(data)
        }
   
    res.end();
    console.log('server running')
})  
}).listen(9999)