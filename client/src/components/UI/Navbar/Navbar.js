import React, { useMemo } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CURRENT_USER, LOGOUT_USER } from "../../../queries";

const Navbar = () => {
  const token = localStorage.getItem("token") || "";
  const { data, loading } = useQuery(CURRENT_USER);

  console.log(Boolean(data?.currentUser.email));

  const [logout] = useMutation(LOGOUT_USER);
  const logoutHandler = () => {
    logout({
      onCompleted: () => {
        localStorage.removeItem("token");
      },
    });
  };

  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/books" className="link">
        Books
      </Link>
      <Link to="/create" className="link">
        Create book
      </Link>

      <Link to="/register" className="link">
        register
      </Link>

      <Link to="/login" className="link">
        login
      </Link>

      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Navbar;
