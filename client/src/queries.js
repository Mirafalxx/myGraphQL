import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      title
      year
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation Create($title: String, $year: Int) {
    create(title: $title, year: $year) {
      year
      title
      id
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Delete($id: ID) {
    delete(id: $id)
  }
`;

export const REGISTER_USER = gql`
  mutation Mutation($email: String, $password: String) {
    registerUser(email: $email, password: $password) {
      token
      password
      email
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      email
    }
  }
`;
