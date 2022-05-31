import React from "react";
import { useAxios } from "../../data/hooks";
import { useState } from "react";
import { Register } from "./Register_Tijl";

const Login = (props) => {
  const { className } = props;
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");

  return (
    <>
      <div className={className} id="myForm">
        <form action="" className="form-container">
          <h1>Login</h1>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={(e) => {
              const password = bcrypt.compare(
                e.target.value,
                hash,
                function (err, result) {
                  if (result) setPassword(password);
                }
              );
            }}
          />

          <button
            type="submit"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              const [users, loading, error] = useAxios(
                "https://wdev2.be/fs_tijl/groepswerk2/api/users"
              );

              {
                users.length > 0 &&
                  users.map(({ email, pass }) => {
                    if (!emailState == email && !passwordState == pass) {
                      error && (
                        <p>
                          You do not have an account yet. Please
                          <a href="/register">register</a>
                        </p>
                      );
                    }
                  });
              }
            }}
          >
            Login
          </button>
          <button type="button" className="btn cancel" onClick={closeForm()}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
