const http=require('http');
const server=http.createServer((req,res)=>
{
res.end("Welcome")
});
server.listen('8080',()=>
{
console.log('server started at 8080 port');
});