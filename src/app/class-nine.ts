// Syntax example
interface IUser {
  name: string;
  age: number;
}
type TUser = {
  name: string;
  age: number;
};
// Extends example

interface IAdmin extends IUser {
  role: string;
}

type TAdmin = TUser & {
  role: string;
};

const admin: IAdmin = {
  name: "Rowshan",
  age: 26,
  role: "Admin",
};

// Merging example
interface IUser {
  name: string;
}

interface IUser {
  age: string;
}

const user: IUser = {
  name: "Rohan",
  age: "26",
};
//   Complex Type example
type TID = string | number;

const id: TID = "fksdfk";
