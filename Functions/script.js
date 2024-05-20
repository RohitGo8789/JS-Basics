//function func_name(para1,para2,...){
    //do some work
//}

//Arrow function -> compact way of writing a function
//const functionName = (para1,para2,...) => {
    //do some work
//};

//e.g.,
// const sum = (a,b) => {
//     return a+b;
// };
// console.log(sum(3,5));

//question
// function noOfVowels(str){
//     let count = 0;
//     for(let ch of str){
//         if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
//             count++;
//         }
//     }
//     return count;
// }

//or

// const noOfVowels = (str) =>{
//     let count = 0;
//     for(let ch of str){
//         if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
//             count++;
//         }
//     }
//     return count;
// };
// let str = "rohitgoswami";
// console.log(noOfVowels(str));

//for-each loop in Arrays -> only used for arrays -> higher order fn/higher order method
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// });

//or

// arr.forEach((val)=>{
//     console.log(val);
// });

//Some more ARRAY methods
//MAP -> creates a new array with the results of some operations. The value its callback returns are used to form a new array.
//arr.map(callbackfn(value,idx,array))
//e.g,
// let arr=[1,2,3,4,5];
// let newArr = arr.map((val) =>{
//     return val*2;
// });
// console.log(newArr);

//FILTER -> creates a new array of elements that give true for a condition/filter
//e.g, all even elements
// let arr=[1,2,3,4,5];
// let newArr = arr.filter((val)=>{
//     return val % 2==0;
// });
// console.log(newArr);

//REDUCE -> performs some operations and reduces the array to a single value.It returns that single value.
//e.g.
// let arr=[1,2,3,4,5];
// let newArr = arr.reduce((prev, curr)=>{
//     return prev>curr ? prev:curr;
// });
// console.log(newArr);

//questions
// let arr = [85,90,97,77,98,54];
// let newArr = arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);

let n = prompt("Enter a num : ");
let arr=[];
for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}
let output = arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(output);



