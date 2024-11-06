// Spread Operator with Arrays
const group1: string[] = ["Rahim", "Karim", "Jashim"];
const group2: string[] = ["Kamal", "Jamal", "Gias"];

// Incorrect way: adding an entire array as a single element
// group1.push(group2); // This results in: ["Rahim", "Karim", "Jashim", ["Kamal", "Jamal", "Gias"]]

// Correct way: using the spread operator to add elements individually
group1.push(...group2); // Now `group1` is: ["Rahim", "Karim", "Jashim", "Kamal", "Jamal", "Gias"]

// Spread Operator with Objects
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

// Merging objects using spread operator
const studentList = {
  ...students1, // spreads all properties from `students1`
  ...students2, // spreads all properties from `students2`
};
// `studentList` now contains all properties from both `students1` and `students2`

// Rest Operator in Function Parameters
// A dynamic way to greet multiple friends without adding individual parameters
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`Hello ${friend}`);
  });
};

greetFriends("Abul", "Kabul", "Babul"); // Can handle any number of names

/* Explanation:
- The spread operator (`...`) allows us to spread out elements or properties from arrays and objects.
- The rest operator (`...` in function parameters) collects arguments into an array, enabling flexible, dynamic inputs. */

// Rest Operators
// const greetFriends = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Hi ${friend1} ${friend2} ${friend3}`);
// };

// const greetFriends = (...friends: string[]) => {
//   friends.forEach((friend) => {
//     console.log(`Hello ${friend}`);
//   });
// };

// greetFriends("Abul", "Kabul", "Babul"); // if we add more here, we will need to add more parameter in function. to make this dynamic, we can use rest operator
