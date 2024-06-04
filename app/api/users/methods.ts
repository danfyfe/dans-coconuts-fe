import { ISignInParams, ISignUpParams } from "@/models/User";

export const signIn = async ({ email, password }: ISignInParams) => {
  const body = JSON.stringify({
    email,
    password
  });

  await fetch('/api/users/signin', {
    method: 'POST',
    body
  });
};


export const signUp = async ({ email, username, password }: ISignUpParams) => {
  // const body = JSON.stringify({
  //   email,
  //   username,
  //   password
  // });

  const query = `
    mutation CreateUser($input: NewUserInput) {
      createUser(input: $input) {
        username
      }
    }
  `;

  const body = JSON.stringify({ 
    query,
    variables: {
      input: {
        email,
        username,
        password
      }
    }
  });
  console.log('BODY: ', body)

  await fetch('/api/users/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body
  });
};

export const signOut = async () => {
  await fetch('/api/users/signout');
};
