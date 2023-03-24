import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello(name: String): String
    books: [Book]
    getAllUsers: [User]
  }
  type Book {
    id: ID
    title: String
    year: Int
  }
  type Login {
    message: String
    error: Boolean
    token: String
    email: String
  }
  type User {
    id: ID
    email: String
    password: String
    token: String
  }

  type Mutation {
    create(title: String, year: Int): Book
    delete(id: ID): ID
    registerUser(email: String, password: String): User
    login(email: String, password: String): Login
  }
`;
