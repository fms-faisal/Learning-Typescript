"use strict";
{
    // Explicitly define 'student1' type without using alias for comparison
    const student1 = {
        name: "Faisal",
        age: 22,
        gender: true,
        contactNo: "+8801849909358",
        address: "Dhaka",
    };
    // Use 'Student' type alias for defining 'student2' to show simplified syntax
    const student2 = {
        name: "Shamim",
        age: 30,
        gender: true,
        address: "Dhaka",
    };
    const userName = "Faisal";
    const isAdmin = true;
    const add = (num1, num2) => num1 + num2;
    // Test the code with console output
    console.log("Student 1:", student1);
    console.log("Student 2:", student2);
    console.log("User Name:", userName);
    console.log("Is Admin:", isAdmin);
    console.log("Addition Result (3 + 4):", add(3, 4));
}
