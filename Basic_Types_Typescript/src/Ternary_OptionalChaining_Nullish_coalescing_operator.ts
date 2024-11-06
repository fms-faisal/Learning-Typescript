{
  let age = 19;

  // Check age using if-else
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  // Check age using ternary operator
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);

  // Nullish coalescing operator example
  // Uses default value "Guest" if isAuthenticated is null or undefined
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // Define User type with optional permanent address
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  // Create an instance of User without a permanent address
  const user: User = {
    name: "Faisal",
    address: {
      city: "Dhaka",
      road: "03A",
      presentAddress: "Bashundhara",
    },
  };

  // Access permanent address using optional chaining and nullish coalescing
  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });
}
