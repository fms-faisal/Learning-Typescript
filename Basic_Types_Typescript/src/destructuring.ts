{
  // Define an object 'user' with nested properties
  const user = {
    id: 101,
    name: {
      firstName: "Faisal",
      middleName: "",
      lastName: "Mahmud",
    },
    contactNo: "+8801849909358",
    address: "Bashundhara, Dhaka",
  };

  // Destructure 'contactNo' as 'phoneNum' and 'middleName' from 'user' object
  const {
    contactNo: phoneNum,
    name: { middleName },
  } = user;

  // Log 'phoneNum' and 'middleName' to the console
  console.log("Phone Number:", phoneNum);
  console.log("Middle Name:", middleName);

  // Define an array 'students' with several student names
  const students = ["Karim", "Rahim", "Neon", "Argon", "Selim"];

  // Destructure the third item as 'topper' and the rest as 'rest'
  const [, , topper, ...rest] = students;

  // Log 'topper' and 'rest' to the console
  console.log("Topper:", topper);
  console.log("Remaining Students:", rest);
}
