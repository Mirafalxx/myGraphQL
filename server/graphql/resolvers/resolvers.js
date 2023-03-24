import { bookResolver } from "./bookResolver.js";
import { userResolver } from "./userResolver.js";

export const resolvers = {
  ...bookResolver,
  ...userResolver,
};
