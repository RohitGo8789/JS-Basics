//Event -> The change in the state of an object is known as an event.
// Events are fired to notify the code of " interesting changes" that may affect code execution.

//Types of some events
// Mouse Events (click, double click, etc)
//Keyboard Events(keypress, keyup, keydown, etc)
//Form Events(submit etc)
//Print event and many more

//event handling in js
// node.event = () =>{
    //handle here
//}

//ex
// let btn1 = document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("button clicked");
// };

//Event Object -> It is a special object that has details about the event. All the event handlers have access to the event object's properties and methods.
// node.event=(e)=>{
   // handle here
//};
//e.target, e.type, e.clientX, e.clientY

// let btn1 = document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX,evt.clientY);
// };

//Event Listeners -> same events pr multiple kaam krwa skte
//node.addEventListener(event, callback)
//node.removeEventListener(event, callback)
//** THE CALLBACK REFERENCE SHOULD BE SAME TO REMOVE

//ex
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (evt) => {
//     console.log("button is clicked- handler1");
    // console.log(evt);
    // console.log(evt.type);
// });

// btn1.addEventListener("click", () => {
//     console.log("button is clicked-handler2");
// });

// const handler3 = () => {
//     console.log("button is clicked-handler3");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button is clicked-handler4");
// });

// btn1.removeEventListener("click", handler3); // to remove an event

//DARK MODE BUTTON EXAMPLE
let modeBtn = document.querySelector("#btn1");
let currMode = "dark";
// modeBtn.addEventListener("click", () =>{
//     if(currMode==="dark"){
//         currMode="light";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

//Or

modeBtn.addEventListener("click", () =>{
    if(currMode==="dark"){
        currMode="light";
        document.querySelector("body").classList.toggle("dark");
    }else{
        currMode = "light";
        document.querySelector("body").classList.toggle("light");
    }
});
