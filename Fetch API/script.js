//FETCH API
//API -> Application Programming Interface
//The fetch api provides an interface for fetching(sending/receiving) resources.
//It uses request and response objects.
//The fetch method is used to fetch a resource(data).
//syntax:-
// let promise = fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com/facts";
let facts = document.querySelector("#facts");
let btn = document.querySelector("#btn");

// const getFacts = async () => {
//   let response = await fetch(URL);
//   console.log(response); // json format
//   let data = await response.json();
//   console.log(data);
//   facts.innerText = data[0].text;
// };

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       facts.innerText = data[0].text;
//     });
// }
// btn.addEventListener("click", getFacts);

//IMP TERMS
//AJAX -> is Asynchronous JS & XML.
//JSON -> is Javascript Object Notation
//json() method -> returns a second promise that revolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object).

//Requests & Response
//HTTP Verbs
//Response Status Code
// NOTE-> HTTP response headers also contain details about the responses, such as content type, HTTP status code.
