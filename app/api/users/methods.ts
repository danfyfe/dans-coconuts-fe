import { ISignInParams, ISignUpParams } from "@/lib/models/User";

export const signIn = async ({ email, password }: ISignInParams) => {
  const body = JSON.stringify({
    email,
    password
  });

  const response = await fetch('/api/users/signin', {
    method: 'GET',
    body
  });

  // const user = await response.json();
  // console.log('user?', response, user);
};


export const signUp = async ({ email, username, password }: ISignUpParams) => {
  const body = JSON.stringify({
    email,
    username,
    password
  });

  const response = await fetch('/api/users/signup', {
    method: 'POST',
    body
  });
};
