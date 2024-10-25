const Multiply = (value: string | number): number | string | undefined => {
  if (typeof value === "number") {
    return value * 2;
  }
  if (typeof value === "string") {
    return `Eta ekta String: ${parseFloat(value) * 2}`;
  }

  return undefined;
};

const result = Multiply("5") as string;
const result2 = Multiply(5) as number;

console.log({ result });
console.log({ result2 });
