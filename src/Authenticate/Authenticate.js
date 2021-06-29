import React, { useState } from "react";
import Login from "./Login";
import Alert from "./Alert";
import Signup from "./Signup";
import Axios from "axios";

const Authenticate = (props) => {
  const [showalert, setshowalert] = useState(false);
  const [showlogin, setshowlogin] = useState(true);
  const [showsignup, setshowsignup] = useState(false);
  const [alertMsg, setalertMsg] = useState("");

  const loginHandler = (loginData) => {

    Axios.post("http://localhost:3000/authenticateUser", { loginData }).then(
      (response) => {
        if (response.data.found) {
          localStorage.setItem('userid', response.data.userid);
          localStorage.setItem('username', response.data.username);
          props.onAuthenticate();
        } else {
          setshowalert(true);
          setalertMsg("wrong username or password");
        }
      }
    );
    
  };

  const signupHandler = () => {
    setshowlogin(false);
    setshowsignup(true);
    setshowalert(false);
    props.setnavbar();
  };

  const signupHandler2 = () => {
    setshowlogin(true);
    setshowalert(true);
    setshowsignup(false);
    setalertMsg("Account Created Successfully");
  };

  if (localStorage.getItem("userid") != null) {
    props.onAuthenticate()
  }

  return (
    <div>
      {showalert && <Alert alertMessage={alertMsg} />}
      {showlogin && <Login onLogin={loginHandler} onsignup={signupHandler} />}
      {showsignup && <Signup onSignup={signupHandler2} />}
    </div>
  );
};
export default Authenticate;
