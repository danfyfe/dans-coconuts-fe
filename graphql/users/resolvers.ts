import { ISignUpParams } from "@/models/User";

const resolvers = {
  Query: {
    user: () => {
      return [{ id: 'Hello World'}]
    }
  },
  Mutation: {
    createUser: async (req: Request, { email, username, image, password }: ISignUpParams, context: any) => {
      try {
        const newUser = await context.dataSources.users.createUser({
          email,
          username,
          image,
          password
        });
        console.log('in mutation')
        return newUser;
      } catch(error) {
        throw new Error('Failed to create user')
      }
    }
  }
};

export default resolvers;
