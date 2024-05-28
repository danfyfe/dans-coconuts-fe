export const GetUserByUsernameQuery = ($username: string) => `
  query GetUserByUsernameQuery {
    User(username: $username) {
      username
      id
      email
    }
  }
`