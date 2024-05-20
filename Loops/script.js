//for loop
// for(let i =0 ;i < 5; i++){
//     console.log("hello");
// }

//for-of loop -> used for string and arrays but not for the objects
// let str = "Rohit";
// for(let val of str){ //iterator -> characters
//     console.log(val);
// }

//for-in loop -> used for objects and arrays
// let student = {
//     name:"Rohit",
//     age:21,
//     cgpa:9.1,
//     isPass:true,
// };

// for(let key in student){
//     console.log(key,student[key]); //returns keys like -> name, age, cgpa, isPass as well as its value
// }

//questions
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

let num = 20;
let guess = prompt("Guess a number: ");
while(num != guess){
    guess = prompt("try again: ");
}
console.log("you won!!")
