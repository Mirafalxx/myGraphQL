import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./models/typeDefs.js";
import { resolvers } from "./graphql/resolvers/resolvers.js";
import User from "./models/User.js";

import mongoose from "mongoose";

const db = await mongoose.connect("mongodb://localhost:27017/Book-db");

console.info(`Connected to DB ${db?.connections[0]?._connectionString}`);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization || "";
    try {
      const user = await User.findOne({ token });
      if (!user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
      return { user };
    } catch (error) {}
  },
});

console.log(`🚀  Server ready at: ${url}`);
