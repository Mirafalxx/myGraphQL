import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { REGISTER_USER } from "../../queries";
import "./style.css";

const Register = () => {
  const [register] = useMutation(REGISTER_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    register({
      variables: {
        email,
        password,
      },
      onCompleted: () => {},
    });
  };
  return (
    <form onSubmit={registerHandler} className="form__item">
      <h2>Register</h2>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <button type="submit">register</button>
    </form>
  );
};

export default Register;
