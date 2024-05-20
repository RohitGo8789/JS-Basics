//Prototypes in JS
//Object -> A javascript object is an entity having state and behavior (properties and methods).

//eg of object
// const student = {
//     fullName: "rohit goswami",
//     marks: 88,
//     getMarks: function () {
//         console.log("your marks ", this.marks);
//     },
// };

//JS objects have a special property called prototype.Whenever we create a new object it will automatically inherits the properties of a prototype.
//We can set prototype using __proto__
//NOTE: If object and prototype have same method then object's method will be used.

//eg of prototype
// const employee = {
//     getTax() {
//         console.log("Tax rate is 10%");
//     },
// };

// const karan = {
//     salary:50000,
// };

// const rohit = {
//     salary:480000.
// };

// karan.__proto__ = employee;
// rohit.__proto__ = employee;

//TypeOf of prototype will be either null or reference to an object

//Classes in JS
//Class is a program-code template for creating objects.
//Those objects will have some state(variables) & some behavior(functions) inside it.

//eg of class creation
//class MyClass{
    //constructor(){...}
    //myMethod(){...}
//}

//object creation inside a class
// let myObj = new MyClass();

//eg
// class TataCar{
//     constructor(brand, mileage){
//         console.log("constructor starts");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     stop(){
//         console.log("stops");
//     }

//     start(){
//         console.log("starts");
//     }

    // setBrand(brand){
    //     this.brand = brand;
    // }
// };

// let sumo = new TataCar("sumo",10);
// console.log(sumo);
// sumo.setBrand("sumo");


//Inheritance in JS
// Inheritance is passing down properties and methods from parents class to child class.
//eg
// class Parent{

//}
// class Child extends Parent{

//}

//NOTE -> If child and parent have same method, child's method will be used. It is known as "Method Overriding".

//eg
// class Parent{
//     hello(){
//         console.log("hello");
//     }
// };

// class Child extends Parent{};

// let obj = new Child();

//Super Keyword
// The super keyword is used to call the constructor of it's parent's class to access the parent's properties and methods.
// super(args) -> call Parent's constructor
//super.parentMethod(args)

//eg
// class Person{
//     constructor(name){
//         // console.log("Enter Parents Constructor");
//         this.species = "homo sapiens";
//         this.name = name;
//     }

//     eat(){
//         console.log("Person eats");
//     }
// };

// class Engineer extends Person{
//     constructor(name){
//         // console.log("Child constructor called");
//         super(name); // to invoke parents class constructor
//         this.branch = "cse";
//     }

//     work(){
//         super.eat();
//         console.log("engineers solve real-world problems");
//     }
// };

// let engObj = new Engineer("rohit");


//Questions
let data = "secret data";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", data);
    }
}

let newUser = new User("rohit", "abc@gmail.com");

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data  = "some new info";
    }
}

let admin = new Admin("xyx", "xyz@email.com");


