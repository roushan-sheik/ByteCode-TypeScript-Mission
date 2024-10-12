// import { TUser } from "./types";

import { IUser } from "../interfaces/interfaces";
import { TFriends } from "../types/types";

// const name = "Rohan";

const user: IUser = {
  name: "Rowshan Sheikh",
  email: "test@gmail.com",
  address: {
    permanentAdd: "Khulna",
    presentAdd: "Dhaka",
    contact: {
      fatherNumber: "0121888888",
      studentNumber: "0121888888",
    },
  },
  age: 26,
};

const {
  name: newName,
  email,
  address: {
    permanentAdd,
    presentAdd,
    contact: { fatherNumber, studentNumber },
  },
} = user;

console.log(
  newName,
  email,
  permanentAdd,
  presentAdd,
  fatherNumber,
  studentNumber
);

const friends: TFriends = ["Rohan", "Rashed", "Rose", "Rowshan"];

const [myNickName, , ...others] = friends;

console.log(myNickName, others);
