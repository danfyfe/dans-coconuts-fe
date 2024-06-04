const typeDefs = `#graphql
  type User {
    _id: ID!
    username: String!
    email: String!
    image: String
  }

  input NewUserInput {
    username: String!
    email: String!
    image: String
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(input: NewUserInput!): User
  }
`;

export default typeDefs;
