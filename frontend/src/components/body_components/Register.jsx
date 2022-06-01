import { Link } from "react-router-dom";
const Register = props => {
  const { className } = props;
  return (
    <div className={className}>
      <form
        method="POST"
        action="https://wdev2.be/fs_tijl/groepswerk2/api/user"
      >
        <div className="register-form">
          <div className="register-heading">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
          </div>
          <hr />
          <div className="register-name">
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
          </div>
          <div className="register-surname">
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
          </div>
          <div className="register-email">
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
          </div>
          <div className="register-password">
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
          </div>
          <div className="register-pswrepeat">
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
          </div>
          <hr />
          <div className="register-footing">
            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>
            <button type="submit" className="registerbtn">
              Register
            </button>
          </div>
        </div>

        <div className="register-signin">
          <p>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Sign in
            </Link>
            !
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
