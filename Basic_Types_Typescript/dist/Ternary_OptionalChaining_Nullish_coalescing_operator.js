"use strict";
let age = 19;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Not adult");
}
const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult);
// Nullish coalescing operator
// decision making based on null / undefined
const isAuthenticated = null;
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1 }, { result2 });
