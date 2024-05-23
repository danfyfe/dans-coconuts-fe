import { ISignUpParams } from "@/lib/models/User";

export const getUser = async ({ email, password }: ISignUpParams) => {
  const body = JSON.stringify({
    email,
    password
  });

  const response = await fetch('/api/users', {
    method: 'GET',
    body
  });

  const user = await response.json();
  console.log('user?', response, user);
};


export const createUser = async ({ email, username, password }: ISignUpParams) => {

  const body = JSON.stringify({
    email,
    username,
    password
  });

  const response = await fetch('/api/users', {
    method: 'POST',
    body
  });

  const user = await response.json();
};
