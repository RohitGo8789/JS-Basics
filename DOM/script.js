//WINDOW OBJECT -> It represents an open window in a browser.It is a browser's object(not js's) & is automatically created by browser. It is a global object with lots of properties ans methods.
//DOM -> When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. 
//DOM MANIPULATION:-
//1. Selecting with ID -> document.getElementById("myId");
//2. Selecting with class -> document.getElementsByClassName("myClass"); -> HTML collection[] -> jst like array
//3. Selecting with tag -> document.getElementsByTagName("p");

//QUERY SELECTOR
//-> document.querySelector("myId / myClass / tag"); -> returns first element
//-> document.querySelectorAll("myId / myClass / tag"); -> returns NodeList

//Nodes is DOM Tree
//1. text node
//2. comment nodes
//3. elements nodes

//DOM Manipulation Properties
//1. tagName -> return tags for element nodes
//2. innerText -> returns the text content of the element and all its children
//3. innerHTML -> returns the plain text or HTML contents in the element
//4. textContent -> returns textual content even for hidden elements

//question
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText+" from apna college student's";

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "unique value 1";

// let idx = 1;
// for(div of divs){
//     div.innerText = `unique item value ${idx}`;
//     idx++;
// }

//Attributes in DOM Manipulation
// i) getAttribute(attr) -> to get the attribute value
// ii) setAttribute(attr, value) -> to set the attribute value th

//style
// node.style

//Insert Elements in DOM
// let el = document.createElement("div");
//i) node.append(el) -> adds at the end of the node(inside)
//ii) node.prepend(el) -> adds the start of the node(inside)
//iii) node.before(el) -> adds before the node (outside)
//iv) node.after(el) -> adds after the node(outside)

//Delete Element
// node.remove() -> removes the node

//questions
// let btn = document.createElement("button");
// btn.innerText = "click me!!";

// btn.style.color = "white"; //.style se inline styling hoti haii jo ki html tags me hi dikhayi deti hai
// btn.style.backgroundColor = "red";

// document.querySelector("body").prepend(btn);

//classList.add() -> used to append a new class into a prev one without overriding it
//classList.remove() -> used to remove new class

let para = document.querySelector("p");
para.classList.add("new_class");


 

