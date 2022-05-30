import React from "react";

const Register = () => {
  return (
    <>
<<<<<<< HEAD
      <form
        method="POST"
        action="https://wdev2.be/fs_tijl/groepswerk2/api/user"
      >
        <div className="container">
=======
      <form action="">
        <div className="register">
>>>>>>> fea10d47b23f85dcfd7958bd7a6c932097b7e824
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

<<<<<<< HEAD
          <label for="name">
            <b>First name</b>
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="name"
            id="name"
            required
          />

          <label for="surname">
            <b>Last name</b>
          </label>
          <input
            type="text"
            placeholder="Enter last name"
            name="surname"
            id="surname"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            required
          />

          <label for="psw-repeat">
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
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
};

=======
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label for="psw-repeat">
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
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
};

>>>>>>> fea10d47b23f85dcfd7958bd7a6c932097b7e824
export default Register;
