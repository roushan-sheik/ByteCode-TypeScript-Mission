{
  type TUser = {
    id: number;
    name: string;
    email: string;
  };
  type TUser2 = {
    // readonly [K in keyof TUser]: TUser[K] | null;
    [K in keyof TUser as `user_${K}`]: TUser[K];
  };
}
