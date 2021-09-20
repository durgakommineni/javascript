const file=require('fs');
file. unlink('read.txt',(error)=>
 {
 if(error) throw error;
 console.log('Deleted');
 })
