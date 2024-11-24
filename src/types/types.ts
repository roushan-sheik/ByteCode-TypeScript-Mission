// Typeforr
export type TUser = {
  name: string;
  email: string;
  address: {
    permanentAdd: string;
    presentAdd: string;
  };
  age: number;
};

export type TFriends = string[];
