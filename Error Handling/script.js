//ERROR HANDLING

//try-catch

//try{
    //...normal code
//}catch(err){  -> err is error object
    //....handling error
//}

//eg
let a= 5;
let b = 6;
console.log(a+b);
try{
    console.log(a+c); //error
}catch(err){
    console.log(err);
}
console.log(a+b);
