import classes from "./HeaderCartButton.module.css";
import Login from "../../Authenticate/Login";
import Modal from "../UI/Modal";
import Axios from "axios";
import { useState } from "react";
import Signup from "../../Authenticate/Signup";
import Alert from "../../Authenticate/Alert";
const HeaderLogin = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [alertMessage,setAlertMessage]=useState("");
  const showLoginHandler = () => {
    setShowLogin(true);
    setShowSignup(false);
    
  };
  const showLoginHandler2 = () => {
    props.signUp()
    setShowLogin(false);
    setShowSignup(false);
    
  };
  const hideLoginHandler=()=>{
      setShowLogin(false);
  }
  const hideSignupHandler=()=>{
      setShowSignup(false);
  }
  const showSignupHandler=()=>{
      setShowSignup(true);
      setShowLogin(false);
  }
  const afterLoginHandler=()=>{
    setShowSignup(false);
    setShowLogin(false);
    props.onClick();
  }
  
  // const loginHandler = (LoginData) => {
  //   setShowLogin(false);
    
  //   Axios.post("http://localhost:3000/authenticateUser", { loginData }).then(
  //     (response) => {
  //       if (response.data.found) {
  //         localStorage.setItem("userid", response.data.userid);
  //         localStorage.setItem("username", response.data.username);
  //         props.onClick();
  //       } else {
  //         setshowalert(true);
  //         setalertMsg("wrong username or password");
  //       }
  //     }
  //   );
  // };

  return (
    <div>
      {showLogin && <Login  onsignup={showSignupHandler} afterLogin={afterLoginHandler} onClose={hideLoginHandler}/>}
      {showSignup && <Signup  onClose={hideSignupHandler} onSignup={showLoginHandler2}/>}
      <button className={classes.button} onClick={showLoginHandler}>
        Login
      </button>
    </div>
  );
};

export default HeaderLogin;
