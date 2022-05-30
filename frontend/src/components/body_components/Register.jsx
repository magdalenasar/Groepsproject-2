import React from "react";

const Register = () => {
  return (
    <>
      <form
        method="POST"
        action="https://wdev2.be/fs_tijl/groepswerk2/api/user"
      >
        <div classNameName="register">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="name">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="name"
            id="name"
            required
          />

          <label htmlFor="surname">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            name="surname"
            id="surname"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
