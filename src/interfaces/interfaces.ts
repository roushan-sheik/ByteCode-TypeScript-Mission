export interface IUser {
  name: string;
  email: string;
  address: {
    permanentAdd: string;
    presentAdd: string;
    contact: {
      fatherNumber: string;
      studentNumber: string;
    };
  };
  age: number;
}
// newuse hhhhhhhhbvhhghgf
export interface INewUser {
  name: string;
  age: number;
  address: {
    permanentAdd?: string;
    presentAdd: string;
  };
}
