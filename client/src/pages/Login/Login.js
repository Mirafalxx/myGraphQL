import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { LOGIN_USER } from "../../queries";

const Login = () => {
  const [register, { data }] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    register({
      variables: {
        email,
        password,
      },
    });
  };

  useEffect(() => {
    const loginData = async () => {
      if (data?.login) {
        console.log(data?.login);
        localStorage.setItem("info", JSON.stringify(data?.login));
      }
    };
    loginData();
  }, [data]);

  return (
    <form onSubmit={registerHandler} className="form__item">
      <h2>Login</h2>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
