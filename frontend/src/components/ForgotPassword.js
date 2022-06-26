import React, { useState } from "react";
import "./UserRegister.css";
import { Link } from "react-router-dom";
import ing from "../assets/ing.png";
import { message } from "antd";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [repassword, setRespassword] = useState("");
  const [color, setColor] = useState("");
  console.log({
    email,

    repassword,

    color,
  });
  const fetchRegister = () => {
    fetch("/api/user/forgotpassword", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        repassword,
        color,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg) {
          message.success(data.msg);
          window.location.reload(true);
          history.push("/login");
        } else {
          message.error(data.error);
        }
      });
  };

  return (
    <div className="body_body">
      <div className="signup-container">
        <div className="welcome-img">
          <img src={ing} alt="welcome image" height="350px" width="450px" />
        </div>

        <div class="form-container">
          <h2 class="title" style={{ fontSize: "30px" }}>
            Reset Your Password{" "}
          </h2>

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
            <div class="form-item fullname">
              <input
                type="text"
                placeholder=" enter your favariute color for security purpuse "
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <span class="item-indicator"></span>
            </div>

            <div class="form-item password">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={repassword}
                onChange={(e) => setRespassword(e.target.value)}
              />
              <span class="item-indicator"></span>
            </div>

            <div class="actions">
              <button type="submit" onClick={() => fetchRegister()}>
                Click to Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
