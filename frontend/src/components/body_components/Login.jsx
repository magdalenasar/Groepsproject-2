import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/hooks";
import Button from "../base_components/Button";

const Login = props => {
  const { className } = props;
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  return (
    <>
      <div className={className} id="myForm">
        <form action="" className="form-container">
          <h1>Login</h1>
          <div className="login_email">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login_psw">
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={e => {
                const password = bcrypt.compare(
                  e.target.value,
                  hash,
                  function (err, result) {
                    if (result) setPassword(password);
                  }
                );
              }}
            />
          </div>
          <div className="login_btn">
            <Button
              type="submit"
              className="btn"
              onClick={e => {
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
                            <Link className="link" to="/register">
                              register
                            </Link>
                          </p>
                        );
                      }
                    });
                }
              }}
            >
              Login
            </Button>
            <Button type="button" className="btn back">
              <Link className="link" to="/">
                Back
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
