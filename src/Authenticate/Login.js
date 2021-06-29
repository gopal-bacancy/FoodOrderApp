import React, { useState } from "react";
import "./Login.css";
import Modal from "../components/UI/Modal";
import Axios from "axios";
import Alert from "./Alert";
const Login = (props) => {
  const [enteredUserName, setEnterdeUserName] = useState("");
  const [enteredPassword, setEnterdePassword] = useState("");

  function userNameChangeHandler(event) {
    setEnterdeUserName(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnterdePassword(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const LoginData = {
      username: enteredUserName,
      password: enteredPassword,
    };
    Axios.post("http://localhost:3000/authenticateUser", { LoginData }).then(
      (response) => {
        if (response.data.found) {
          localStorage.setItem("userid", response.data.userid);
          localStorage.setItem("username", response.data.username);
          props.afterLogin();
        } else {
          setshowalert(true);
          setalertMsg("wrong username or password");
        }
      }
    );

    setEnterdeUserName("");
    setEnterdePassword("");
  };

  const signupHandler = (event) => {
    event.preventDefault();
    props.onsignup();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <div className="outer-input-field">
          <div className="input-field">
            <label>User Name</label>
            <input
              className="input-field"
              type="text"
              value={enteredUserName}
              onChange={userNameChangeHandler}
            />
          </div>
        </div>
        <div className="outer-input-field">
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
        <div className="log-in-button">
          <button type="submit">Login</button>
          <button onClick={signupHandler}>Create New Account</button>
        </div>
      </form>
    </Modal>
  );
};
export default Login;
