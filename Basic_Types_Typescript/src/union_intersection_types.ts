{
  // Define possible roles for frontend developers using a union type
  type FrontendDeveloper = "Junior Developer" | "Senior Developer";

  // Define possible roles for full-stack developers using a union type
  type FullStackDeveloper = "Mern Stack Developer" | "Django Developer";

  // Union of FrontendDeveloper and FullStackDeveloper roles
  type Developer = FrontendDeveloper | FullStackDeveloper;

  // Define a User type with some required and optional fields
  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  // Create an instance of a User with required and optional fields
  const user1: User = {
    name: "Faisal",
    email: "faisalmahmud778@gmail.com",
    gender: "male",
    bloodGroup: "A+",
  };

  // Define FrontendDeveloper type with skills and designation
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  // Define BackendDeveloper type with skills and designation
  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  // FullStackDeveloper combines both FrontendDev and BackendDev properties
  type FullStackDev = FrontendDev & BackendDev;

  // Create an instance of FullStackDev with properties from both FrontendDev and BackendDev
  const fullStackDeveloper: FullStackDev = {
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
  const frontendRole: Developer = "Junior Developer";
  const fullstackRole: Developer = "Mern Stack Developer";

  console.log("\nDeveloper Role Test:");
  console.log("Frontend Role:", frontendRole);
  console.log("FullStack Role:", fullstackRole);
}
