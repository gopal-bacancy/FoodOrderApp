import classes from "./HeaderCartButton.module.css";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderLogoutButton = (props) => {
  const cartCtx = useContext(CartContext);

  const logoutHandler = () => {
    localStorage.clear();
    setShowAlert(true);
    props.onlogout();
    cartCtx.items.reduce.amount = 0;
    console.log(cartCtx.totalAmount.clear);
    console.log((cartCtx.items.length = 0));
  };

  return (
    <div>
      <button className={classes.button} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default HeaderLogoutButton;
