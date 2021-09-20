const file=require('fs');
file.readFile('reading.txt',(error,data)=>
 {
 if(error) {
 console.log(error);
 }
 else{
 console.log(data.toString())
 } 
})
