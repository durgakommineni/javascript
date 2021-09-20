const http=require('http');
const filesystem=require('fs');
const server=http.createServer((req,res)=>{
 if(req.method=='POST' && req.url=='/writeFileA')
 {
 filesystem.writeFile('A.txt','Hi Welcome A',(error)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 filesystem.readFile('A.txt',(error,data)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 res.end(data.toString())
 }
 })
 }
 })
 }
 else if(req.method=='GET' && req.url=='/writeFileA')
 {
 filesystem.readFile('A.txt',(error,data)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 res.end(data.toString())
 }
 })
 }

 else if(req.method=='PUT' && req.url=='/writeFileA')
 {
 filesystem.appendFile('A.txt','Node JS',(error)=>
 {
 if(error) {
 res.end(error)
 }
 else{

 filesystem.readFile('A.txt',(error,data)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 res.end(data.toString())
 }
 })
 }
 })
 }

 else if(req.method=='DELETE' && req.url=='/writeFileA')
 {
 filesystem.writeFile('A.txt','',(error)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 filesystem.readFile('A.txt',(error,data)=>
 {
 if(error) {
 res.end(error)
 }
 else{
 res.end(data.toString())
 }
 })
 }
 })
 }

 else{
 res.end('You are entered bad url')
 }
})
server.listen('8080',()=>
{
 console.log('server started at 8080 port');
})