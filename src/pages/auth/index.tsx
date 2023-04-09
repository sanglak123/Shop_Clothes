import Link from "next/link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Auth_M01 = () => {
  const [type, setType] = useState("sign_in");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle_Sign_In = async () => {
    alert("sign in");
  };
  return (
    <div id="auth">
      <div className="auth_content bsd">
        <div className="auth_header">
          <div className="logo">
            <h1>M01</h1>
            <span>FASHION</span>
          </div>
        </div>

        <div className="auth_item">
          <span>
            {type === "sign_in"
              ? "SIGN IN"
              : type === "sign_up"
              ? "SIGN UP"
              : "FOGOT PASSWORD"}
          </span>
          <hr className="mt-2 mb-2" />

          <div className="auth_input">
            <div className="input_item">
              <label>Username</label>
              <input placeholder="Enter your username." />
              <span>Username not valid.</span>
            </div>

            <div className="input_item">
              <label>Password</label>
              <input type="password" placeholder="Enter your password." />
              <span>Password not valid.</span>
            </div>

            {type === "sign_up" && (
              <>
                <div className="input_item">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email." />
                  <span>Email not valid.</span>
                </div>
                <div className="input_item">
                  <label>Phone</label>
                  <input type="text" placeholder="Enter your number phone." />
                  <span>Phone not valid.</span>
                </div>
              </>
            )}
          </div>
          <div className="auth_link">
            {type === "sign_in" && (
              <div className="link_item">
                <Button onClick={() => setType("sign_up")}>
                  Register now.
                </Button>
                <Button onClick={() => setType("fogot_pass")}>
                  Fogot password.
                </Button>
              </div>
            )}
          </div>
          <div className="auth_btn">
            {type === "sign_in" ? (
              <Button onClick={handle_Sign_In} className="btn_over">
                Sing In
              </Button>
            ) : type === "sign_up" ? (
              <>
                <Button
                  onClick={() => setType("sign_in")}
                  className="btn_cancle"
                >
                  Cancle
                </Button>
                <Button onClick={handle_Sign_In} className="btn_over">
                  Sing Up
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setType("sign_in")}
                  className="btn_cancle"
                >
                  Cancle
                </Button>
                <Button onClick={handle_Sign_In} className="btn_over">
                  Sing Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth_M01;
