import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
