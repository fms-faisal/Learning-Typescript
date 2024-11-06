{
  /* Alias is a shortcut for a type. It uses a simple name to represent a complex type, which keeps the code clean and easy to read. */

  // Type Alias for 'Student' with optional 'contactNo'
  type Student = {
    name: string;
    age: number;
    gender: boolean;
    contactNo?: string;
    address: string;
  };

  // Explicitly define 'student1' type without using alias for comparison
  const student1: {
    name: string;
    age: number;
    gender: boolean;
    contactNo: string;
    address: string;
  } = {
    name: "Faisal",
    age: 22,
    gender: true,
    contactNo: "+8801849909358",
    address: "Dhaka",
  };

  // Use 'Student' type alias for defining 'student2' to show simplified syntax
  const student2: Student = {
    name: "Shamim",
    age: 30,
    gender: true,
    address: "Dhaka",
  };

  // Alias for 'UserName' and 'IsAdmin'
  type UserName = string;
  const userName: UserName = "Faisal";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  // Type Alias for an add function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  // Test the code with console output
  console.log("Student 1:", student1);
  console.log("Student 2:", student2);
  console.log("User Name:", userName);
  console.log("Is Admin:", isAdmin);
  console.log("Addition Result (3 + 4):", add(3, 4));
}
