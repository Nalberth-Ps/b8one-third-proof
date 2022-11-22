export type User = {
  email: string;
  name: string;
};

export type Token = {
  token: string;
};

export type SignIn = {
  email: string;
  password: string;
};

export type UserToken = {
  user: User;
  token: Token;
}