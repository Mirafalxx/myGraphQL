import { GraphQLError } from "graphql";
import Book from "../../models/Book.js";

export const bookResolver = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
    books: async (_, args, context) => {
      if (!context.user) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      } else {
        return await Book.find({});
      }
    },
  },
  Mutation: {
    create: async (_, { title, year }) => {
      const newBook = new Book({ title, year });
      await newBook.save();
      return newBook;
    },
    delete: async (_, { id }) => {
      const result = await Book.deleteOne({ _id: id });
      if (result.acknowledged && result.deletedCount == 1) {
        return id;
      }
      return null;
    },
  },
};
