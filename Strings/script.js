//Template Literals
// let sentence = `This is a sentence`;
// console.log(sentence);

// let obj = {
//     item:"pen",
//     cost:10, 
// };

// let output = `The cost of ${obj.item} is ${obj.cost} rupees`;  //expression or variables can be written in ${--}
// console.log(output);

//Methods in string
//str.toUpperCase(); str.toLowerCase(); str.trim(); -> remove white-spaces
//str.slice(start,end?); -> for sub-strings     str1.concat(str2); 
//str.replace(searchVal, newVal);     str.charAt(idx);

//question
let Name = prompt("Enter full name: ");
let str = Name.toLowerCase();
console.log(str+"@"+str.length);