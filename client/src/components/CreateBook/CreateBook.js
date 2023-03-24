import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOOK, GET_BOOKS } from "../../queries";

const CreateBook = () => {
  const [createMutation] = useMutation(CREATE_BOOK);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const createBookHandler = (e) => {
    e.preventDefault();
    createMutation({
      variables: {
        title,
        year: +year,
      },
    });
    setTitle("");
    setYear("");
  };
  return (
    <form onSubmit={createBookHandler}>
      <div className="form__item">
        <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form__item">
        <input name="year" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <button type="submit">create book</button>
    </form>
  );
};

export default CreateBook;
