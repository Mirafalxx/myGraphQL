import { useQuery } from "@apollo/client";
import React from "react";
import Book from "../Book/Book";
import { GET_BOOKS } from "../../queries";
const Books = () => {
  const { data, loading, error } = useQuery(GET_BOOKS, { fetchPolicy: "network-only" });
  return (
    <>
      <table className="table" style={{ marginTop: "45px" }}>
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Check console for error logs</td>
            </tr>
          )}
          {!loading && !error && data?.books?.map((book) => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </>
  );
};

export default Books;
