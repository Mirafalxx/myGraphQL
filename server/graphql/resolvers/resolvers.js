import { bookResolver } from "./bookResolver.js";
import { userResolver } from "./userResolver.js";
import _ from "lodash";

export const resolvers = _.merge(bookResolver, userResolver);
