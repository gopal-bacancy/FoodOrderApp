import classes from "./HeaderCartButton.module.css";
// import Alert from "../../Authenticate/Alert";
// import { useContext,useState } from "react";
// import CartContext from "../../store/cart-context";
// import Axios from "axios";
const OrderedItems = (props) => {
  
  const orderedItemsHandler = () => {
    props.onShowOrderedCart()
  };
  return (
    
    <button className={classes.button} onClick={orderedItemsHandler}>
      OrderedItems
    </button>
  );
};

export default OrderedItems;
