import classes from "./HeaderCartButton.module.css";
import Alert from "../../Authenticate/Alert";
import {useState} from "react";
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderLogoutButton = (props) => {
    const [showAlert,setShowAlert]=useState(false);
    const cartCtx = useContext(CartContext);
    const logoutHandler=()=>{
        localStorage.clear();
        setShowAlert(true);
        props.onlogout()
        cartCtx.items.reduce.amount=0;
        console.log(cartCtx.totalAmount.clear);
        console.log(cartCtx.items.length=0);
        
        
    }
    const onClose=()=>{
        setShowAlert(false);
    }
    return <div>
   
    <button className={classes.button} onClick={logoutHandler}>
    Logout
  </button>
  </div>
};

export default HeaderLogoutButton;
