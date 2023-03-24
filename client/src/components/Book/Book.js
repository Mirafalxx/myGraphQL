import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK, GET_BOOKS } from "../../queries";

const Book = ({ book }) => {
  const [deleteMutation] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  const deleteBookHandler = () => {
    deleteMutation({
      variables: {
        id: book.id,
      },
    });
  };
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.year}</td>
      <td style={{ fontSize: "25px" }}>
        <button onClick={deleteBookHandler}>&times;</button>
      </td>
    </tr>
  );
};

export default Book;
