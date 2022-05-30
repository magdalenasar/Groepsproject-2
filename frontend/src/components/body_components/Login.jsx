import Button from "../base_components/Button";

const Login = props => {
  const { className } = props;
  return (
    <>
      <div class={className} id="myForm">
        <form action="" class="form-container">
          <h1>Login</h1>
          <div className="login_email">
            <label for="email">
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
            <label for="psw">
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
            <Button type="submit" class="btn">
              Login
            </Button>
            <Button type="button" class="btn cancel" onclick="closeForm()">
              Close
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
