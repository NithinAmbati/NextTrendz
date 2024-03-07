import { useDebugValue, useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changePasswordMode = () => {
    setShowPassword(!showPassword);
  };

  const loginFailure = () => {};

  const loginSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken);
  };

  const submitBtn = async () => {
    const url = "https://apis.ccbp.in/login";
    const userDetails = {
      username,
      password,
    };
    console.log(userDetails);
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const fetchedData = await response.json();
    const jwtToken = fetchedData.jwt_token;
    if (jwtToken === undefined) loginFailure();
    else loginSuccess(jwtToken);
  };

  return (
    <div className="bg-container">
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          className="login-page-logo"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={changeUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "password" : "text"}
          id="password"
          placeholder="password"
          onChange={changePassword}
        />
        <div className="mt-2">
          <input type="checkbox" onChange={changePasswordMode} />
          <label>show password</label>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitBtn}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
