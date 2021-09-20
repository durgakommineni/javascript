
const file=require('fs');
file.writeFile('reading.txt','kommineni',(error,data)=>
{
 if(error) {
    console.log(error)
}
else{
    console.log(data)}
});
