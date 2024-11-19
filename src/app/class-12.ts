{
  // ====================== Start =============================
  type TUser = {
    name: string;
    email: string;
    role: string;
  };

  const registerUser = <T extends TUser>(user: T) => {
    // Operation
    console.log(user);
  };

  const user = {
    id: 2040,
    name: "Rowshan Sheikh",
    email: "test@gmail.com",
    // role: "Admin",
    address: "Khulna",
  };

  const user2 = {
    id: 2040,
    name: "Rowshan Sheikh",
    email: "test@gmail.com",
    role: "Admin",
    address: "Khulna",
  };

  const verifiedUser = registerUser(user);

  const verifiedUser2 = registerUser(user2);
  // ====================== End =============================
}
