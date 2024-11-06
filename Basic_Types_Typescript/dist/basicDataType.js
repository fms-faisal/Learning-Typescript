"use strict";
// Basic data types
let firstName = "Faisal"; // implicit data type (TypeScript infers it as string)
let lastName = "Mahmud"; // explicit data type
// Trying to assign a non-string will cause an error:
// lastName = 123; Error: Type 'number' is not assignable to type 'string'
let roll = 123; // explicitly typed as a number
// roll = "one two three"; Error: Type 'string' is not assignable to type 'number'
let isAdmin = true; // only true or false values allowed
// isAdmin = "yes"; Error: Type 'string' is not assignable to type 'boolean'
let x = undefined; // explicitly defined as undefined
// x = 10; Error: Type 'number' is not assignable to type 'undefined'
// null
let y = null; // explicitly defined as null
// y = "text"; Error: Type 'string' is not assignable to type 'null'
// The `any` type example: a variable without an initial value or type
let d;
console.log(d); // undefined because it has no initial value
d = 123; // allowed because `d` is implicitly of type `any`
d = "string"; // also allowed because `d` is still of type `any`
d = true; // `d` can hold any type of value due to `any` type
// array
let friends = ["Rahim", "Karim"]; // array of strings
friends.push("Selim"); // only strings can be added to `friends` array
// friends.push(123); Error: Argument of type 'number' is not assignable to parameter of type 'string'
let eligibleRollList = [1, 2, 3]; // array of numbers
// eligibleRollList.push("four"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// Another way to define an array with both number and string using `Array` type:
let mixedArray = [1, "two", 3];
mixedArray.push("four"); // valid because it allows both types
mixedArray.push(5); // valid as well
// Tuple
let address = ["Dhaka", 1, "Bashundhara"]; // fixed-length and fixed-type array
// address = ["Chittagong", 2];  Error: Source has 2 elements but target requires 3
// address[0] = 5; Error: Type 'number' is not assignable to type 'string'
address[1] = 99; // This is fine because index 1 is specified as a number
// Union types for array elements
let ageName = [50, "Faisal"]; // array of mixed types (string and number) using union type
ageName.push("Karim"); // Valid: union allows string
ageName.push(20); // Valid: union allows number
// ageName.push(true);  Error: 'boolean' is not assignable to 'string | number'
