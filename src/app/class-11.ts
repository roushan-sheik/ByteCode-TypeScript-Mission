type TPerson<T, Y = null> = {
  name: string;
  age: number;
  address: string;
  contact: T;
  car?: Y;
};

// function myFunc(name: string = "Guest") {}

const person: TPerson<{ phone: string }> = {
  name: "Rowshan Sheikh",
  age: 26,
  address: "Khulna",
  contact: {
    phone: "018888888888",
  },
};

type TContact = { phone: string; email: string };
interface ICar {
  name: string;
  color: string;
  price: string;
}

const person2: TPerson<TContact, ICar> = {
  name: "Rowshan Sheikh",
  age: 26,
  address: "Khulna",
  contact: {
    phone: "018888888888",
    email: "example@gmial.com",
  },
  car: {
    name: "Bike",
    color: "Black",
    price: "2000$",
  },
};

function testUser<T>(user: T) {
  console.log(user);
}

const testUser2 = <T = "Guest">(user: T) => {
  console.log(user);
};
