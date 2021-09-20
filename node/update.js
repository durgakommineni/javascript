const file=require('fs');
file. appendFile ('write.txt', 'Welcome', (error)=>
 {
 if(error) throw error;
 console.log('Updated');
 }) 