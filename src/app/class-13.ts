type TComputer = {
  ssd: string;
  ram: string;
  mouse: string;
  //   monitor: string;
};

type TParts = "ssd" | "ram" | "mouse";

type TComputerParts = keyof TComputer;

// const parts: TComputerParts = "";

const computer: TComputer = {
  ssd: "500GB",
  ram: "16GB",
  mouse: "hp",
};
const computer2 = {
  ssd: "500GB",
  ram: "16GB",
  mouse: "hp",
  monitor: "hp",
};
const computer3 = {
  ssd: "500GB",
  ram: "16GB",
};
// 1. dot notation
// 2. bracket notation

const ram = computer["ram"]; // 16GB

const generateComputerParts = <T, Y extends keyof T>(partsObj: T, key: Y) => {
  return partsObj[key];
};

const myParts = generateComputerParts(computer, "");

const myParts2 = generateComputerParts(computer2, "");

const myParts3 = generateComputerParts(computer3, "");

// conditional type

type isNumber<T> = T extends number ? "Number" : "Not a Number";

type test1 = isNumber<number>;
type test2 = isNumber<string>;
