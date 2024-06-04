const resolvers = {
  Query: {
    user: () => {
      return [{ id: 'Hello World'}]
    }
  },
  Mutation: {
    createUser: () => {
      return 'new user created';
    }
  }
};

export default resolvers;
