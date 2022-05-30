import Button from "../base_components/Button";

const Login = props => {
  const { className } = props;
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
              type="text"
              placeholder="Enter Email"
              name="email"
              required
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
            />
          </div>
          <div className="login_btn">
            <Button type="submit" className="btn">
              Login
            </Button>
            <Button type="button" className="btn cancel" onClick="closeForm()">
              Close
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
