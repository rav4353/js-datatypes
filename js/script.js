//primitive data types


//adding a number and a string, JavaScript will treat the number as a string.

// ex for string & number

let x = 16 + "Volvo";
console.log(x);


//boolean


console.log(Boolean(10 > 9));


//null


let y = null;
console.log(Boolean(y));


//undefined


let z;
console.log(Boolean(z));


//Non primitive data types


//array

//declare arrays with the const keyword.


const car = ["Saab", "Volvo", "BMW"];
console.log(car);


//create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);


//object


// Create an object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Display some data from the object:


console.log(person.firstName + " is " + person.age + " years old.");
// Regular Expression

//i

let text = "Visit W3Schools";
let result = text.match(/w3schools/i);
console.log(result);

//g

let texts = "Is this all there is?";
let results = texts.match(/is/g);
console.log(results); 

//m

let textss = "\nIs th\nis it?";
let resultss = textss.match(/^is/m);
console.log("Resultss is: " + (resultss));