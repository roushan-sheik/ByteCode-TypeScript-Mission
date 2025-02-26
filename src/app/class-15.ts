// Block Start
{
  //   1.  Record<Keys , Type>
  const user = {
    id: 1,
    name: "Rowshan",
    email: "test@gmail.com",
  };
  function checkUser(user: Record<string, string | unknown>) {
    console.log(user);
  }

  //   2.  Partial<Type>
  //   3.  Required<Type>
  //   4.  Readonly<Type>
  //   5.  Exclude<Type, ExcludedUnion>
  //   6.  Extract<Type, Union>
  //   7.  Pik<Type, Keys>
  //   8.  Omit<Type, Keys>
  //   9.  NonNullable<Type>
  //   10. NonNullable<Type>
}
// Block End
