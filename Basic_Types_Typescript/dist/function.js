"use strict";
// Normal function in TypeScript
function add(num1, num2) {
    // This function takes two numbers and returns a number
    return num1 + num2;
}
add(2, 2); // Calling the function with arguments 2 and 2
// Arrow function in TypeScript
const addArrow = (num1, num2) => num1 + num2; // Shorthand function syntax for returning the sum
/* Difference between normal and arrow functions
   - Arrow functions are often used for shorter, inline functions.
   - In regular functions, `this` refers to the object that calls the function.
   - In arrow functions, `this` is lexically scoped, meaning it’s inherited from the surrounding context. */
// Method in an Object //function inside object
const userBalance = {
    name: "Faisal",
    balance: 10,
    // Method to add balance, accessing properties with `this`
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    },
};
console.log(userBalance.addBalance(20)); // Outputs: "My new balance is: 30"
/* Why use `this` in regular functions but not in arrow functions?
   to access property from object we need to use this
   this does not work in arrow function, but works in regular function in javascript
   - `this` in regular functions refers to the object instance, allowing access to object properties.
   - Arrow functions do not have their own `this`; they inherit `this` from the surrounding scope.
*/
// Using Array Map with Arrow Function
const arr = [1, 2, 3, 4];
// Using the map function to create a new array with each element squared
const newArray = arr.map((element) => element * element);
console.log(newArray); // Outputs: [1, 4, 9, 16]
/* Explanation:
   - `arr.map()` iterates over each element and applies the arrow function, creating a new array.
   - This technique is useful for transforming data in arrays without changing the original array. */
