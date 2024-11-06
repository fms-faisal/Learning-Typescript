// Reference Type -> Object
/* Reference Type -> Object indicates that we're working with a type that stores a reference (memory address) to data rather than the data itself. Objects, arrays, and functions are examples of reference types, unlike primitive types (like number, string) that store actual values directly.
 */

const user: {
  firstName: string; // required property, must be a string
  middleName?: string; // optional property, may or may not be provided
  lastName: string; // required property, must be a string
  isAdult: boolean; // required property, must be a boolean
  readonly company: "xyz company"; // literal type, fixed to "xyz company", cannot be changed
} = {
  company: "xyz company", // assigning value to literal type
  firstName: "Faisal",
  lastName: "Mahmud",
  isAdult: true,
};

/* Optional properties allow flexibility; `middleName` is not provided here and is optional
  
Literal type ensures `company` is a constant value. Trying to change it will cause an error:
user.company = "abc company"; // Error: Cannot assign to 'company' because it is a read-only property
  
Explanation:
- `middleName` is marked as optional using `?`, meaning it's not required in the object.
- `readonly` on `company` makes it immutable, preventing any changes after initialization.
- Using literal types (like `"xyz company"`) restricts the property to a single possible value. */
