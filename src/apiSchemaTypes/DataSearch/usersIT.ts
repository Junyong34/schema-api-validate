export type usersIT = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: supportK;
};
type supportK = {
  url: string;
  text: string;
};
