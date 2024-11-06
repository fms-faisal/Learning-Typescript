"use strict";
// Spread Operator
const group1 = ["Rahim", "Karim", "Jashim"];
const group2 = ["Kamal", "Jamal", "Gias"];
// group1.push(group2); it will become like the line below
// const group1: string[] = ["Rahim", "Karim", "Jashim", ["Kamal", "Jamal", "Gias"]];
// instead of that we use spread operator to get the desired output
group1.push(...group2);
const students1 = {
    typescript: "Faisal",
    Redux: "Mahmud",
    dbms: "Neo",
};
const students2 = {
    prisma: "Kashem",
    next: "Jolil",
    cloud: "Rahi",
};
const studentList = Object.assign(Object.assign({}, students1), students2);
// Rest Operators
// const greetFriends = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Hi ${friend1} ${friend2} ${friend3}`);
// };
const greetFriends = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Hello ${friend}`);
    });
};
greetFriends("Abul", "Kabul", "Babul"); // if we add more here, we will need to add more parameter in function. to make this dynamic, we can use rest operator
