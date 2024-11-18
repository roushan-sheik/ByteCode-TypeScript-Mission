type TGenericType<yourType> = Array<yourType>;

const roll: TGenericType<number> = [1, 2, 3, 4];

const friends: TGenericType<string> = ["Rohan", "Zannat", "Rakib"];

const isMarried: Array<boolean> = [true, false, true];

const usersArray: TGenericType<{ name: string; age: number }> = [
  {
    name: "Rohan Sheikh",
    age: 26,
  },
  {
    name: "Rakib",
    age: "20",
  },
];
console.log(usersArray);

type TTuppleType<T, Y> = [T, Y];

const MyTupple: TTuppleType<string, string> = ["Admin", "User"];

const exampleTupple: TTuppleType<number, { name: string; age: number }> = [
  1234,
  {
    name: "Rohan",
    age: 25,
  },
];
