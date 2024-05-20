//if-else
// let x = 5;
// if(x % 2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

//else-if
// let age = 20;
// if(age < 18){
//     console.log("child");
// }else if(age==18){
//     console.log("adult");
// }else{
//     console.log("senior");
// }

//ternary operators
// let age = 18;
// console.log(age >= 18 ? "adult" : "not adult");

//questions
// let num = prompt("Enter a number"); //prompt is used to take the user input
// if(num % 5 === 0){
//     console.log(num," is a multiple of 5");
// }else{
//     console.log(num," is not a multiple of 5");
// }

let num = prompt("Enter score:");
if(num >= 90 && num <= 100){
    console.log("A");
}else if(num >= 70 && num <= 89){
    console.log("B");
}else if(num >= 60 && num <= 69){
    console.log("C");
}else if(num >= 50 && num <= 59){
    console.log("D");
}else if(num >= 0 && num <= 49){
    console.log("F");
}