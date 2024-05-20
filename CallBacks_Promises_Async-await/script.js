//async await >> promises chains >> callback hell

//Sync in JS

//Synchronous -> It means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete it's execution.

//eg
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous -> Due to asynchronous programming, sometimes the important instructions get blocked due to some previous instructions, which causes a delay in the UI.
//Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

//eg
// console.log("one");
// console.log("two");

// setTimeout( () =>{
//     console.log("hello");
// }, 4000);   // timeout -> delays the output for given time. 1sec = 1000ms

// console.log("three");
// console.log("four");

//CALLBACK -> A callback is a function passed as an argument to another function.

//eg
// function sum(a, b) {
//     console.log(a+b);
// };

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// };

// calculator(1,2, sum);

// const fn = () =>{
//     console.log("hello");
// };

// setTimeout(fn, 3000);

//CALLBACK HELL
// Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of doom).
//This style of programming becomes difficult to understand and manage.

//eg
// function getData(dataID, getNextData){
//     //2s delay
//     setTimeout(() => {
//         console.log("data", dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

//Callback Hell
// getData(1, ()=>{
//     console.log("getting data 2...");
//     getData(2, ()=>{
//         console.log("getting data 3....");
//         getData(3);
//     });
// });

//solution of callback hell via promise chaining
// function getData(dataID){
//     //2s delay
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("success");
//         }, 2000);
//     });

// }

// getData(1).then((res) =>{
//         return getData(2);
//     }).then((res) =>{
//         return getData(3);
//     }).then((res) =>{
//         console.log(res);
//     });

//PROMISES
//Promise is for "eventual" completion of task. It is an object in js.
//It is a solution to callback hell.

//syntax -> let promise = new Promise( (resolve,reject) => {...}) -> function with two handlers.
//NOTE -> resolve and reject are two callbacks provided by js.
//Promise have 3 states -> pending, fulfilled, rejected

//eg
// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occurred");
// });

//A javascript Promise object can be:
// * Pending = the result is undefined
// * Resolved = the result is a value(fulfilled)     resolve(result)
// * Rejected = the result is an error object     reject(error)

//NOTE -> Promise has state (pending, fulfilled) & some result(result for resolve & error for reject).

//eg
// function getData(dataID, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data", dataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 4000);
//     });
// }

//.then() & .catch() in Promise
// promise.then((res) => {...})
// promise.catch((err) => {...})

//eg
// const getPromise = () =>{
//     return new Promise((resolve, reject) =>{
//         // console.log("I am a promise");
//         // resolve("success");
//         reject("i reject");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) =>{
//     console.log("rejects", err);
// });

// function asyncFun1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 2000);
//     });
// };

// function asyncFun2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 2000);
//     });
// };

//Promise Chain
// console.log("fetching data1...");
// let p1 = asyncFun1();
// p1.then((res) =>{
//     console.log("fetching data2...");
//     let p2 = asyncFun2();
//     p2.then((res) => {});
// });

//ASYNC-AWAIT
//-> async function always returns a promise.
//syntax:-
// async function myFunc(){...}
//await pushes the execution of it's surrounding async function until the promise is settled.

//eg
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("200");
//         },2000);
//     });
// }

// async function getWeatherData(){
//     await api(); //1st call
//     await api(); //2nd call
// }

// function getData(dataID){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log(dataID);
//             resolve("success");
//         }, 2000);
//     });
// };

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await console.log("success");
// }

//IIFE -> Immediately Invoked Function Expression
//-> IIFE is a function that is called immediately as soon as it is defined.
//syntax:-
//    (function () {
//....
//     })();

//      OR

//    (() => {
//...
//    })();

//     OR

//    (async () => {
//...
//     })();

//eg
function getData(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(dataID);
      resolve("success");
    }, 2000);
  });
}

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
  await console.log("success");
})();
