//? Union type |

import { INewUser } from "../interfaces/interfaces";

// type TEmployee = "ReactJS" | "VueJs";

// const employee: TEmployee = "VueJs";

//? Intersection  &

type TPerson = {
  name: string;
  age: number;
};

type TEmployee = {
  employeeId: number;
  department: string;
};

type TPersonEmployee = TPerson & TEmployee;

const PersonEmployee: TPersonEmployee = {
  name: "Rohan",
  age: 25,
  employeeId: 30003,
  department: "CSE",
};
// Ternary operator

// falsy values
// false
// undefined
// null
// ""
// 0
// NaN
// 0n

const isLoggedIn = "";

// Ternery operator => ? :
const user = isLoggedIn ? isLoggedIn : "Guest User";
// Nullish co....
const user2 = isLoggedIn ?? "Guest User";

// console.log("user one:::", { user });
// console.log({ user2 });

// Optional Chainning

const newUser: INewUser = {
  name: "Rowshan Sheikh",
  age: 26,
  address: {
    // permanentAdd: "Khulna",
    presentAdd: "Dhaka",
  },
};

const add = newUser?.address?.permanentAdd ?? "Permanent Add Nai";
console.log({ add });
