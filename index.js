//import the constructor function "factorial"
const Factorial = require("./factorial");

// the work of constructor function is to create objects using "new" operator
const factorialObj = new Factorial();






const fact6 = factorialObj.getFactorial(6);
console.log(fact6);
const fact3 = factorialObj.getFactorial(3);
console.log(fact3);

const fact0 = factorialObj.getFactorial(0);
console.log(fact0);

