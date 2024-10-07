type TMyFunc2 = (x: number, y: number) => number;

const myFunc2: TMyFunc2 = (x, y) => {
  return x * y;
};

const Car = {
  brand: "Tesla",
  year: "2024",
  printCar: function (price: number) {
    console.log(
      `Car brand is ${this.brand} and year ${this.year} and price ${price}USD`
    );
  },
};
Car.printCar(1000);

const colors: string[] = ["red", "black", "blue"];
const newArr: string[] = ["green", "pink", ...colors];

const user1 = {
  name: "Test user",
  age: 24,
};

const newUser = {
  ...user1,
  isMarried: true,
};
// type TUser = (user1: string, user2: string, user3: string) => void;

const users = (...usersArr: string[]) => {
  console.log(usersArr);
};
users("sakib", "Rohan", "Rashed", "Rowshan");

//  class 5 ===============================
