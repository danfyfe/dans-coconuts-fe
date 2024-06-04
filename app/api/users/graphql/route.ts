import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import resolvers from "@/graphql/users/resolvers";
import typeDefs from "@/graphql/users/schema";
import { NextRequest } from "next/server";
import { UserModel, Users } from "@/models/User";

const server = new ApolloServer({
  resolvers,
  typeDefs
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      users: new Users({ modelOrCollection: UserModel })
    }
  })
});

export async function GET(request: NextRequest) {
  return handler(request);
};

export async function POST(request: NextRequest) {
  return handler(request);
};