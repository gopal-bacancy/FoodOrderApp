import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import Modal from "../components/UI/Modal";
import Alert from "./Alert";
const Signup = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmailId, setEnteredEmailId] = useState("");

  function NameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function EmailIdChangeHandler(event) {
    setEnteredEmailId(event.target.value);
  }

  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const SignupData = {
      name: enteredName,
      emailid: enteredEmailId,
      username: enteredUserName,
      password: enteredPassword,
    };

    Axios.post("http://localhost:3000/saveUser", { SignupData }).then(
      (response) => {
        if (response.data.saved) {
          props.onSignup();
          setEnteredUserName("");
          setEnteredPassword("");
          setEnteredName("");
          setEnteredEmailId("");
        }
      }
    );
  };

  return (
    <Modal onClose={props.onClose}>
      
        <form onSubmit={submitHandler}>
          <div className="outer-input-field">
            <div className="input-field">
              <label>Name</label>
              <input
                type="text"
                value={enteredName}
                onChange={NameChangeHandler}
              />
            </div>
          </div>
          <div className="outer-input-field">
            <div className="input-field">
              <label>Email Id</label>
              <input
                type="text"
                value={enteredEmailId}
                onChange={EmailIdChangeHandler}
              />
            </div>
          </div>
          <div className="outer-input-field">
            <div className="input-field">
              <label>UserName</label>
              <input
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
            <button type="submit">Create Account</button>
          </div>
        </form>
      
    </Modal>
  );
};
export default Signup;
