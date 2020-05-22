// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//Because the variable internal is inside the function that is containing the nested function.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function counter(num) {
  let numArray = [];
  for (let i = 1; i <= num; i++) {
    numArray.push(i);
  }
  return numArray;
}
function summation(number, cbCounter) {
  let summation = cbCounter.reduce(function (a, b) {
    return a + b;
  }, 0);

  return summation;
}

console.log(summation(4, counter(4)));