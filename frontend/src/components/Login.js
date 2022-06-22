import React, { useState } from "react";
import ing from "../assets/ing.png";
import { Link } from "react-router-dom";
import { message } from "antd";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchLogin = () => {
    fetch("/api/user/userlogin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.user.role === "Company") {
          history.push("/company");
          message.success("login success");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else if (data.user.role === "Student") {
          message.success("login success");
          history.push("/student");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else if (data.user.role === "Mentor") {
          message.success("login success");
          history.push("/mentor");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else if (data.user.role === "admin") {
          message.success(data.message);
          history.push("/admin");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          message.error(data.error);
        }
      });
  };

  return (
    <div className="body_body">
      <div className="signup-container">
        <div className="welcome-img">
          <img src={ing} alt="welcome image" height="400px" width="450px" />
        </div>

        <div class="form-container">
          <p class="title">Sign In</p>

          <div class="signup-form">
            <div class="form-item email">
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span class="item-indicator"></span>
            </div>
            <div class="form-item password">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="item-indicator"></span>
            </div>

            <p class="login">
              Don't have an account?
              <Link to="/userregister">Register</Link>
            </p>
            <div class="actions">
              <button type="submit" onClick={() => fetchLogin()}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
