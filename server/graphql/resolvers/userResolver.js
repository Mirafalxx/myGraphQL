import User from "../../models/User.js";
import { GraphQLError } from "graphql";

export const userResolver = {
  Query: {
    getAllUsers: async () => await User.find({}),
  },
  Mutation: {
    registerUser: async (_, { email, password }) => {
      const newUser = await new User({ email, password });
      await newUser?.generateToken();
      await newUser?.save();
      return newUser;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new GraphQLError("invalid email or password", {
          extensions: "BAD_REQUEST",
        });
      }
      const isMatch = await user.checkPassword(password);
      if (!isMatch) {
        throw new GraphQLError("invalid email or password", {
          extensions: "BAD_REQUEST",
        });
      }

      return user;
    },
    // logout: async (_, __, context) => {
    //   try {
    //     const user = await User.findOne({ email: context.user.email });
    //     await user.generateToken();
    //     return true;
    //   } catch (e) {
    //     return false;
    //   }
    // },
  },
};
