"use strict";
{
    // Create an instance of a User with required and optional fields
    const user1 = {
        name: "Faisal",
        email: "faisalmahmud778@gmail.com",
        gender: "male",
        bloodGroup: "A+",
    };
    // Create an instance of FullStackDev with properties from both FrontendDev and BackendDev
    const fullStackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    };
    // Test outputs to verify the types and instances
    console.log("User1 Details:");
    console.log("Name:", user1.name);
    console.log("Email:", user1.email);
    console.log("Gender:", user1.gender);
    console.log("Blood Group:", user1.bloodGroup);
    console.log("\nFull Stack Developer Details:");
    console.log("Skills:", fullStackDeveloper.skills.join(", "));
    console.log("Frontend Designation:", fullStackDeveloper.designation1);
    console.log("Backend Designation:", fullStackDeveloper.designation2);
    // Testing Developer role type
    const frontendRole = "Junior Developer";
    const fullstackRole = "Mern Stack Developer";
    console.log("\nDeveloper Role Test:");
    console.log("Frontend Role:", frontendRole);
    console.log("FullStack Role:", fullstackRole);
}
